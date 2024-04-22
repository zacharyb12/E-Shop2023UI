// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user-services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUser } from '../../models/update-user.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/component/AuthGuard/auth.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  // Initialize model with UpdateUser type
  model: UpdateUser;

  // Retrieve user ID from the AuthService
  id: string = this.authService.userIdString;

  // Constructor: Inject required services and set default values
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    // Initialize model properties
    this.model = {
      id: '',
      lastName: '',
      firstName: '',
      email: '',
      status: 'user',
      address: '',
    };
  }

  // ngOnInit: Lifecycle hook, called after the component is initialized
  ngOnInit(): void {
    // Fetch user details using the user ID
    this.userService.getUserById(this.id).subscribe((user) => {
      // Update the model with user details
      this.model = user;
    });
  }

  // onFormSubmit: Method triggered when the form is submitted
  onFormSubmit(): void {
    // Check if the model is not null
    if (this.model) {
      // Update user details using the UserService
      this.userService.updateUser(this.model.id, this.model).subscribe({
        next: (response) => {
          // Navigate to the user-list page upon successful update
          this.router.navigateByUrl('/user/user-list');
        },
        error: (error) => {
          // Log an error message if the update fails
          console.error('Update user failed:', error);
        }
      });
    }
  }

  // deleteUser: Method to delete a user by email
  deleteUser(email: string): void {
    this.userService.deleteUser(email).subscribe({
      // Handle the response as needed
    });
  }
}
