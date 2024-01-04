import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Categoryservices } from '../../pages/categories/services-categories/categories.service';
import { AuthService } from '../AuthGuard/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userStatus = '';
  isConnected = false;
  userIdStringNavbar = '';

  wallpaperClass: string;

  constructor(
    private categoryService: Categoryservices,
    private authService: AuthService,
    private router: Router,
  ) {
    const currentDate = new Date();

    // Diviser l'année en quatre trimestres
    const secondQuarterStart = new Date(currentDate.getFullYear(), 3, 1);
    const thirdQuarterStart = new Date(currentDate.getFullYear(), 6, 1);
    const fourthQuarterStart = new Date(currentDate.getFullYear(), 9, 1);
  
    // Définir la classe CSS pour chaque trimestre
    if (currentDate < secondQuarterStart) {
      this.wallpaperClass = 'noel-bg';
    } else if (currentDate < thirdQuarterStart) {
      this.wallpaperClass = 'noel-bg';
    } else if (currentDate < fourthQuarterStart) {
      this.wallpaperClass = 'noel-bg';
    } else {
      this.wallpaperClass = 'noel-bg';
    }
    
  }
  

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isLogged) => {
      this.isConnected = isLogged;
      this.userStatus = this.authService.userStatus;
      this.userIdStringNavbar = this.authService.userIdString;
    });
  }

  private updateAuthStatus(isLogged: boolean) {
    this.isConnected = isLogged;
    this.userIdStringNavbar = this.authService.userIdString;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['#']);
  }
}
