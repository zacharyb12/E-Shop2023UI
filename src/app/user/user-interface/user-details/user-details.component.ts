// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from 'src/app/component/AuthGuard/auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // Model for user data
  model: User;

  // User ID retrieved from the AuthService
  userId: string = this.authService.userIdString;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    // Initialize the model with default values
    this.model = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      status: '',
      address: ''
    };
  }

  ngOnInit() {
    // Use switchMap to handle the asynchronous getUserById call
    this.route.paramMap.pipe(
      switchMap(params => {
        // Retrieve user details using the ID from the route parameters
        return this.userService.getUserById(params.get('id') || this.userId);
      })
    ).subscribe(
      (user) => {
        // Update the model with user details
        this.model.id = user.id;
        this.model.lastName = user.lastName;
        this.model.firstName = user.firstName;
        this.model.email = user.email;
        this.model.status = user.status;
        this.model.address = user.address;
      });
  }
}
