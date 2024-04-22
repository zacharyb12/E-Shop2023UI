// Import necessary Angular modules
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/component/AuthGuard/auth.service';
import { loginModel } from 'src/app/component/AuthGuard/loginModel.model';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  // Model to store login information (email and password)
  model: loginModel = {
    email: '',
    password: ''
  };

  // Constructor of the class
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Function called when a user attempts to log in
  login() {
    this.authService.login(this.model).subscribe(
      // In case of successful login
      (response) => {
        // Redirect to the user view page on successful login
        this.router.navigate(['/user-interface/user-view']);
      },
      // In case of login failure
      (error) => {
        console.error('Login failed:', error);
        // Redirect to the home page on login failure
        this.router.navigate(['']);
      }
    );
  }

  // Function to navigate to the new account creation page
  newAccount(){
    this.router.navigate(['/user-interface/new-account']);
  }
}

