import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/component/AuthGuard/auth.service';
import { loginModel } from 'src/app/component/AuthGuard/loginModel.model';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  model: loginModel = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.model).subscribe(
      (response) => {
        this.router.navigate(['/user/user-view']);
      },
      (error) => {
        console.error('Login failed:', error);
        this.router.navigate(['']);

      }
    );
  }
}

