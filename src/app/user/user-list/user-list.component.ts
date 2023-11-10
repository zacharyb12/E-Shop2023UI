import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  constructor(
    private userService: UserService,
  ) {}

  userList$? : Observable<User[]>;
  
  ngOnInit(): void {
    this.userList$ = this.userService.getAllUsers();
    console.log(this.userList$)
  }

}
