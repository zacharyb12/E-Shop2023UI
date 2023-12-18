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
        // La navigation peut être effectuée ici ou vous pouvez réagir à userId$ dans ngOnInit
        this.router.navigate(['#']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}

