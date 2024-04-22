// Import necessary Angular modules and dependencies
import { Component } from '@angular/core';
import { Order } from '../models/order.model';
import { Subscription } from 'rxjs';
import { OrderService } from '../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  // Model to hold the order details
  model: Order;

  // Order ID received from the route parameter
  id: string | null = null;

  // Subscription to observe changes in the order details
  updateProductSubscription?: Subscription;

  // Constructor with OrderService, Router, and ActivatedRoute injection
  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) {  

    // Initialize the model with default values
    this.model = {
      id: "",
      userId: "",
      orderItemId : "",
      orderDate: new Date(),
      status: '',
      totalPrice: 0
    };
  }

  // Lifecycle hook - ngOnInit is called after the component is initialized
  ngOnInit(): void {
    // Get the order ID from the route parameter
    this.id = this.route.snapshot.paramMap.get('id');

    // Check if the order ID is available
    if (this.id) {
      // Fetch the order details by ID from the service
      this.orderService.getOrderById(this.id).subscribe((order) => {
        // Update the model with the fetched order details
        this.model = order;
      });
    }
  }
}
