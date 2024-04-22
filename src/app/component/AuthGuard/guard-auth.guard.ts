// Import necessary Angular modules and dependencies
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GuardAuthGuard implements CanActivate {

  // Constructor with AuthService and Router injections
  constructor(private authService: AuthService, private router: Router) {}

  // Implementation of CanActivate interface
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    // Check the login status using the authService's isLogged$ observable
    return this.authService.isLogged$.pipe(

      // Use the tap operator to perform side effects based on the login status
      tap((isConnected) => {

        // If the user is not connected (not logged in), navigate to the user view page
        if (!isConnected) {
          this.router.navigate(['/user/user-view']);
        }

      })

    );

  }
}
