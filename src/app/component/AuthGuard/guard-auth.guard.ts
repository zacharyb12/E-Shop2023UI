import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GuardAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLogged$.pipe(
      tap((isConnected) => {
        if (!isConnected) {
          // Redirigez vers la page de connexion ou faites ce que vous jugez nécessaire
          // Vous pouvez utiliser la navigation Angular pour rediriger l'utilisateur
          // Exemple : this.router.navigate(['/login']);
          this.router.navigate(['/login']); // Redirigez vers la page de connexion
        }
      })
    );
  }
}
