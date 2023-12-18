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

  model?: User;

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

  ngOnInit(): void {
    if(this.authService.userId$){
      this.authService.userId$.subscribe((userId) => {
        if (userId) {
          // Assuming getUserById returns an Observable<User>
          this.userService.getUserById(userId).subscribe(
            (user: User) => {
              this.model = user;
            },
            error => {
              console.error('Error fetching user details:', error);
            }
            );
          }
        });
      }
  }
}
