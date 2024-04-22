// Import necessary Angular modules and dependencies
import { Component } from '@angular/core';
import { UserService } from '../../user-services/user.service';
import { AddUser } from '../../models/add-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  // Model for user data
  model: AddUser;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    // Initialize the model with default values
    this.model = {
      lastname: '',
      firstName: '',
      email: '',
      password: '',
      status: 'user',
      address: '',
    };
  }

  // Method to handle form submission
  onFormSubmit(): void {
    // Call the addUser method of the userService to add a new user
    this.userService.addUser(this.model);
    // Navigate to the user-list route after adding the user
    this.router.navigateByUrl('/user/user-list');
  }
}
