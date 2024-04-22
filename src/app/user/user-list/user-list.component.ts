// Import necessary Angular modules and dependencies
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  // Inject the UserService into the component
  constructor(private userService: UserService) {
    // Initialize userList$ with the result of getAllUsers() from the UserService
    this.userList$ = this.userService.getAllUsers();
  }

  // ngOnDestroy lifecycle hook: called just before Angular destroys the component
  ngOnDestroy(): void {
    // Unsubscribe from any ongoing observables or cleanup tasks to prevent memory leaks
    // this.destroyed.complete();
  }

  // Observable to hold the list of users
  destroyed= new Subject<boolean>;
  userList$? : Observable<User[]>;

  // ngOnInit lifecycle hook: called after the component is initialized
  ngOnInit(): void {

  }
}
