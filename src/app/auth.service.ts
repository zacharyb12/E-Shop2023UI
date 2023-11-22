import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './component/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isConnected = false;

  private url: string = environment.apiBaseUrl;

  constructor(private client: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.client.post(this.url + "/api/User/Login",
      { email: email, password: password },
      { responseType: 'text' }
    );
  }

  logout() {
    localStorage.clear();
    this.isConnected = false;
  }
}

