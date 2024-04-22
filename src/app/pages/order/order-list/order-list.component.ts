// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  // Constructor with OrderService injection
  constructor(
    private orderService: OrderService,
  ) {
    
  }

  // Observable to hold the list of orders
  orderList$?: Observable<Order[]>;

  // Lifecycle hook - ngOnInit is called after the component is initialized
  ngOnInit(): void {
    // Fetch the list of all orders from the service
    this.orderList$ = this.orderService.getAllOrders();
  }
}
