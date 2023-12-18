import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Categoryservices } from '../../pages/categories/services-categories/categories.service';
import { AuthService } from '../AuthGuard/auth.service';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAdmin = false;
  isConnected! : boolean;
  userId$ : Observable<string> | undefined  ;

  constructor(
    private categoryService: Categoryservices,
    private authService: AuthService,
    private router: Router,
  ) {
    this.authService.isLogged$.subscribe((isLogged) => {
      this.isConnected = isLogged;
      this.userId$ = this.authService.userId$;
      console.log(this.userId$)
    });
  }

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isLogged) => {
      this.isConnected = isLogged;
      // this.userId$ = this.authService.userId$;
    });
  }
  

  logout() {
    console.log(this.isConnected);
    this.authService.logout();
    // Vous pouvez naviguer vers une page spécifique après la déconnexion, par exemple :
    this.router.navigate(['/login']);
    // Ou simplement rester sur la même page.
    // this.router.navigate([this.router.url]);
  }
}
