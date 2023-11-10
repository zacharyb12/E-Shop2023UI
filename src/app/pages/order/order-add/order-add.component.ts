import { Component } from '@angular/core';
import { Productservices } from '../../product/services-product/product.service';
import { Router } from '@angular/router';
import { AddOrder } from '../order-list/models/AddOrder.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent {
  
  model : AddOrder;
  
  constructor(
    private orderService : OrderService,
  private router : Router
  ) {  
    this.model = {
      Id : '',
      UserId : '',
      OrderDate : new Date(),
      Status : '',
      TotalPrice : 0,
    }
  }
  

  onFormSubmit(): void {
    console.log(this.model);
    this.orderService.addOrder(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/order/order-list');
      }
    });
  }
}