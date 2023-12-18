import { Component } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUser } from '../models/update-user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {

  model : UpdateUser;

  id : string | null = null;

  updateProductSubscription?: Subscription;

  constructor(
    private userService : UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {  
    this.model = {
      id : '',
      lastName : '',
      firstName : '',
      email : '',
      password : '',
      status : 'user',
      address : '',

    }
  }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id) {
      this.userService.updateUser(this.id, this.model).subscribe((user) => {
        this.model = user;
      });
    }
  }
  
  

  onFormSubmit(): void {
    if (this.model && this.id) {
      this.userService.updateUser(this.id, this.model).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/user/user-list');
        },
        error: (error) => {
          console.error('Update user failed:', error);
        }
      });
    }
  }

  deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe({
      
    })
  }
}
