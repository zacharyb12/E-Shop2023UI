import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user/user-services/user.service';
import { loginUser } from '../../user/models/login-user.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  connection() {
    this.authService.login(this.email, this.password).subscribe(
      (token) => {
        console.log(token);
        // Gérer le token et mettre à jour l'état de la connexion si nécessaire
        this.authService.isConnected = true;
      },
      (error) => {
        console.error(error);
        // Gérer les erreurs de connexion
      }
    );
  }

}
