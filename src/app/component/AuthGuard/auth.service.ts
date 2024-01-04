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

  private localStorageKey = 'authToken';
  private _isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLogged$: Observable<boolean> = this._isLoggedSubject.asObservable();
  userIdString = '';
  tokenExpireDate = new Date();
  userStatus!: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadAuthStatus();
  }

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

  login(model: any): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/api/User/Login`, model).pipe(
      map((response: any) => {

        localStorage.setItem(this.localStorageKey, response.token);
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
    localStorage.removeItem(this.localStorageKey);
    this.setLoggedInStatus(false);
    this.userIdString = '';
    this.router.navigate(['']);
  }

  isTokenExpired(): boolean {
    try {
      return this.tokenExpireDate.valueOf() <= new Date().valueOf();
    } catch (error) {
      return true;
    }
  }

  get isLogged(): boolean {
    if (this.isTokenExpired()) {
      this.logout();
      return false;
    }
    return this._isLoggedSubject.value;
  }

  private extractUserIdFromToken(token: string): string {
    try {
      const decodedToken: any = jwt_decode.jwtDecode(token);
      return decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'];
    } catch (error) {
      return 'null';
    }
  }

  private extractTokenExpireDate(token: string): Date {
    try {
      const decodedToken: any = jwt_decode.jwtDecode(token);
      return new Date(decodedToken.Exp);
    } catch (error) {
      return new Date();
    }
  }

  private extractTokenIsAdmin(token: string): string {
    try {
      const decodedToken: any = jwt_decode.jwtDecode(token);
      const userRole: string = decodedToken.role;

      return userRole;
    } catch (error) {
      return 'user';
    }
  }
  
}
