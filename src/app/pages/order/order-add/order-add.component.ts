// Import necessary Angular modules and dependencies
import { Component } from '@angular/core';
import { Productservices } from '../../product/services-product/product.service';
import { Router } from '@angular/router';
import { AddOrder } from '../models/AddOrder.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent {
  
  // Model to hold the details for adding a new order
  model: AddOrder;
  
  // Constructor with OrderService and Router injection
  constructor(
    private orderService: OrderService,
    private router: Router
  ) {  
    // Initialize the model with default values
    this.model = {
      userId: '',
      orderDate: new Date(),
      status: '',
      totalPrice: 0,
    };
  }
  

  // Method to handle form submission
  onFormSubmit(): void {
    // Log the model details to the console
    console.log(this.model);

    // Call the order service to add a new order
    this.orderService.addOrder(this.model)
      .subscribe({
        // Handle the response from the service
        next: (response) => {
          // Navigate to the order list page after successful addition
          this.router.navigateByUrl('/order/order-list');
        }
      });
  }
}
