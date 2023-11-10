import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from './models/order.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(
    private orderService : OrderService,
  ) {
    
  }


  orderList$? : Observable<Order[]>;
  
  ngOnInit(): void {
    this.orderList$ = this.orderService.getAllOrders();
    console.log(this.orderList$)
  }

}