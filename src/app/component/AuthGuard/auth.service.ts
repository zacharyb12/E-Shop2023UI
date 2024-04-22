// Import necessary Angular modules and dependencies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variables *******************
  private localStorageKey = 'authToken';

  // BehaviorSubject to track the login status
  private _isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // Observable to subscribe to the login status changes
  isLogged$: Observable<boolean> = this._isLoggedSubject.asObservable();

  userIdString = ''; // User ID from the token

  tokenExpireDate = new Date(); // Token expiration date

  userStatus!: string; // User status (e.g., admin or user)

  // Constructor *******************
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadAuthStatus();
  }

  // Methods *******************
  private loadAuthStatus() {
    const authToken = localStorage.getItem(this.localStorageKey);
    if (authToken) {
      this.setLoggedInStatus(true, authToken);
    } else {
      this.setLoggedInStatus(false);
    }
  }

  private setLoggedInStatus(isLoggedIn: boolean, authToken?: string) {
    this._isLoggedSubject.next(isLoggedIn);

    if (isLoggedIn && authToken) {
      this.userIdString = this.extractUserIdFromToken(authToken);
      this.tokenExpireDate = this.extractTokenExpireDate(authToken);
      this.userStatus = this.extractTokenIsAdmin(authToken);
    }
  }

  // User login method
  login(model: any): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/api/User/Login`, model).pipe(
      map((response: any) => {
        localStorage.setItem(this.localStorageKey, response.token);
        localStorage.setItem("id", this.extractUserIdFromToken(response.token));
        localStorage.setItem("status", this.extractTokenIsAdmin(response.token));
        localStorage.setItem("email", this.extractUserEmailFromToken(response.token));
        localStorage.setItem("date", this.extractTokenExpireDate(response.token).toUTCString());

        // Set the login status to true and navigate to the user view page
        this.setLoggedInStatus(true, response.token);
        this.router.navigate(['/user-interface/user-view']);
        return response;
      }),
      catchError((error: any) => {
        this.setLoggedInStatus(false);
        throw error;
      })
    );
  }


  logout() {
    localStorage.clear();
    this.setLoggedInStatus(false);
    this.userIdString = '';
    this.router.navigate(['#']);
  }

  isTokenExpired(): boolean {
    try {
      return this.tokenExpireDate.valueOf() <= new Date().valueOf();
    } catch (error) {
      return true;
    }
  }

  // Getter for checking if the user is logged in
  get isLogged(): boolean {
    // If the authentication token is expired, perform logout and return false
    if (this.isTokenExpired()) {
      this.logout();
      return false;
    }
    // Otherwise, return the current login status
    return this._isLoggedSubject.value;
  }

  // Extract user ID from the JWT token
  private extractUserIdFromToken(token: string): string {
    try {
      const decodedToken: any = jwt_decode.jwtDecode(token);
      return decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'];
    } catch (error) {
      return 'null';
    }
  }

  // Extract user email from the JWT token
  private extractUserEmailFromToken(token: string): string {
    try {
      const decodedToken: any = jwt_decode.jwtDecode(token);
      return decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
    } catch (error) {
      return 'null';
    }
  }

  // Extract token expiration date from the JWT token
  private extractTokenExpireDate(token: string): Date {
    try {
      const decodedToken: any = jwt_decode.jwtDecode(token);
      const expireDate = decodedToken.exp;
      return new Date(decodedToken.exp);
    } catch (error) {
      return new Date();
    }
  }

  // Extract user status (e.g., admin or user) from the JWT token
  private extractTokenIsAdmin(token: string): string {
    try {
      const decodedToken: any = jwt_decode.jwtDecode(token);
      return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    } catch (error) {
      return 'user';
    }
  }
}
