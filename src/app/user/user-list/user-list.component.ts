import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy{

  constructor(
    private userService: UserService,
  ) {
    this.userList$ = this.userService.getAllUsers();
  }
  ngOnDestroy(): void {
    // this.destroyed.complete();
  }

  // destroyed= new Subject<boolean>;
  userList$? : Observable<User[]>;
  
  ngOnInit(): void {
    // this.userList$ = this.userService.getAllUsers();
      // takeUntil(this.destroyed);
  }

}
