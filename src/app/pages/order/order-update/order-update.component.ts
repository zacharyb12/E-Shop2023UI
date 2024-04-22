// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {

  // Order ID received from the route parameter
  id: string | null = null;

  // Model to hold the order details
  model?: Order;

  // Constructor with OrderService and ActivatedRoute injection
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
    // Initialize the model with default values
    this.model = {
      id: '',
      userId: '',
      orderItemId: '',
      status: '',
      orderDate: new Date(),
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
      this.orderService.getOrderById(this.id).subscribe(
        order => {
          // Update the model with the fetched order details
          this.model = order;
        }
      );
    }
  }
}
