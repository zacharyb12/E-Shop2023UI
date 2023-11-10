import { Component } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { AddUser } from '../models/add-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  model : AddUser;

  constructor(
    private userService: UserService,
    private router : Router
  ){    this.model = {
    lastname: '',
    firstName: '',
    email: '',
    password: '',
    status: 'user',
    address: '',

    }
  }

  onFormSubmit(): void {
    console.log(this.model);
    this.userService.addUser(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/user/user-list');
      }
    });
  }
}
