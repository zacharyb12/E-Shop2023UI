// Import necessary Angular modules and dependencies
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddUser } from 'src/app/user/models/add-user.model';
import { UserService } from 'src/app/user/user-services/user.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  // Model for user registration data
  model: AddUser;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Initialize the model with default values
    this.model = {
      lastname: '',
      firstName: '',
      email: '',
      password: '',
      status: 'user',
      address: ''
    };
  }

  onFormSubmit(): void {
    // Use the userService to add a new user by subscribing to the addUser method
    this.userService.addUser(this.model).subscribe(
      () => {
        // Navigate to the specified route upon successful user registration
        this.router.navigateByUrl('/product/product-user-view');
      },
      error => {
        // Handle errors if necessary
        console.error(error);
      }
    );
  }
}
