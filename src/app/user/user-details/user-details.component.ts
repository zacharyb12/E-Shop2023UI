import { Component } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  model : User;
  
  id : string | null = null;
  
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
    ){    
      this.model = {
      id: '',
    lastname: '',
    firstName: '',
    email: '',
    password: '',
    address: '',
    cartItems : [],
    favoriteItems: [],
    status : 'user',
  }
}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id) {
          this.userService.getUserById(this.id).subscribe((user) => {
            this.model = user;
  
          });
    
  
    }
}
}
