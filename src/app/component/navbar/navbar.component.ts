// Import necessary Angular modules and dependencies
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

  // Variables to store user status, login status, user ID, and admin status
  userStatus = localStorage.getItem('userStatus');
  isConnected = false; // Flag indicating whether the user is connected
  userIdStringNavbar = this.authService.userIdString; // User ID from the AuthService
  isAdmin: boolean = false; // Flag indicating whether the user is an admin

  // Constructor with injections of Categoryservices, AuthService, and Router
  constructor(
    private categoryService: Categoryservices,
    private authService: AuthService,
    private router: Router,
  ) {}

  // Lifecycle hook called after component initialization
  ngOnInit(): void {
    // Subscribe to the isLogged$ observable to get real-time updates on login status changes
    this.authService.isLogged$.subscribe((isLogged) => {
      // Update the isConnected flag based on the login status
      this.isConnected = isLogged;

      // Retrieve and update user status from local storage
      this.userStatus = localStorage.getItem('status');

      // Check if the user is an admin and update the isAdmin flag accordingly
      if (this.userStatus == 'admin') {
        this.isAdmin = true;
      }

      // Update the user ID from the AuthService
      this.userIdStringNavbar = this.authService.userIdString;
    });
  }

  // Private method to update authentication status
  private updateAuthStatus(isLogged: boolean) {
    this.isConnected = isLogged;
    this.userIdStringNavbar = this.authService.userIdString;
  }

  // Logout method
  logout() {
    this.authService.logout();
  }
}
