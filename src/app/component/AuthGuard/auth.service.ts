import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environments';
import { loginModel } from './loginModel.model';
import { UserService } from 'src/app/user/user-services/user.service';
import * as jwt_decode from 'jwt-decode';
import { LoggedUser } from './login-user/info-logged-user.model';
import { User } from 'src/app/user/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {
    // Charge le statut de connexion au démarrage
    this.loadAuthStatus();
  }

  private _isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
 _userIdSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  // Observables accessibles depuis l'extérieur
  isLogged$: Observable<boolean> = this._isLoggedSubject.asObservable();
  userId$: Observable<string> | undefined ;
  
  // Clé de stockage local
  private localStorageKey = 'authToken';

  login(model: loginModel): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/api/User/Login`, model).pipe(
      map((response: any) => {
        localStorage.setItem(this.localStorageKey, response.token);
        this._isLoggedSubject.next(true);
        if(response.token)
        {
          this.userId$ = this.extractUserIdFromToken(response.token) as unknown as Observable<string>;

        }
        this.router.navigate(['/']);
        return response;
      }),
      catchError((error: any) => {
        this._isLoggedSubject.next(false);
        throw error;
      })
    );
  }

  logout() {
    localStorage.removeItem(this.localStorageKey);
    this._isLoggedSubject.next(false);
    this._userIdSubject.next(null);
    this.router.navigate(['/login']);
  }

  // Valeurs par défaut
  get isLogged(): boolean {
    return this._isLoggedSubject.value;
  }

  private loadAuthStatus() {
    const authToken = localStorage.getItem(this.localStorageKey);
    if (authToken) {
      this._isLoggedSubject.next(true);
      this.extractUserIdFromToken(authToken);
      console.log('User ID from AuthService:', this.userId$); // Déplacez ce log après extractUserIdFromToken
    } else {
      this._isLoggedSubject.next(false);
    }
  }

  private extractUserIdFromToken(token: string): string | null {
    try {
      const decodedToken: any = jwt_decode.jwtDecode(token);
  
      console.log('Decoded Token:', decodedToken); // Log pour afficher le jeton décodé
      const userId: string = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"];

      console.log(userId); // Log pour affic
      
      const expires: string = decodedToken.Exp;
      const userEmail: string = decodedToken.Name;
      const userStatus: string = decodedToken.Role;

      this._userIdSubject.next(userId);
  
      return userId;
    } catch (error) {
      console.error('Erreur lors du décodage du jeton JWT :', error);
      this._userIdSubject.next(null);
      return null;
    }
  }
}
