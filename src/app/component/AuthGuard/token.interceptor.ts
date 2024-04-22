// Import necessary Angular modules and dependencies
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  // Constructor with AuthService and Router injections
  constructor (
    private readonly authService: AuthService,
    private readonly router: Router
  )
  {}

  // Implementation of the intercept method from HttpInterceptor interface
  intercept(request: HttpRequest<any>, next: HttpHandler){

    // Get the authentication token from local storage
    const token = localStorage.getItem("authToken");

    // Check if the token exists
    if(token){

      // Check if the token is expired
      if(this.isTokenExpired(token)){
        // If expired, perform logout and navigate to the home page
        this.authService.logout();
        this.router.navigate(['#']);
        return next.handle(request);
      }

      // Clone the request and attach the Authorization header with the token
      const newReq = request.clone({
        headers: request.headers.set("Authorization", token)
      });

      // Continue with the modified request
      return next.handle(newReq);
    }

    // If no token exists, continue with the original request
    return next.handle(request);
  }

  // Helper function to check if the token is expired
  private isTokenExpired(token: string) {
    const expiration = (JSON.parse(atob(token.split('.')[1]))).exp;
    return expiration * 1000 < Date.now();
  }
}
