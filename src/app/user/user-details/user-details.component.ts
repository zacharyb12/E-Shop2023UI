import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from 'src/app/component/AuthGuard/auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  model: User;
  userId: string  = this.authService.userIdString;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
    ) {
      this.model = {
        id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      status: '',
      address: '',
      
    };
  }

  ngOnInit() {
    let user = this.userService.getUserById(this.userId).subscribe((user) => {
      this.model.id = user.id;
      this.model.lastName = user.lastName;
      this.model.firstName = user.firstName;
      this.model.email = user.email;
      this.model.password = user.password;
      this.model.status = user.status;
      this.model.address = user.status;

    });

    }

          
        
      
  
}
