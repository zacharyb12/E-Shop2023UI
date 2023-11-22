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


  model : Order;

  id : string | null = null;

  updateProductSubscription?: Subscription;

  constructor(
    private orderService : OrderService,
        private router: Router,
    private route: ActivatedRoute
  ) {  

    this.model = {
      id: "",
      userId: "",
      orderItemId : "",
      orderDate: new Date(),
      status: '',
      totalPrice: 0
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.orderService.getOrderById(this.id).subscribe((order) => {
        this.model = order;
      });

    }


  }
}


