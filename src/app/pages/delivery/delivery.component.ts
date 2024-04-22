// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { DeliveryService } from './services/delivery.service';
import { Delivery } from './models/delivery.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  // Constructor with injection of DeliveryService
  constructor(
    private deliveryService: DeliveryService,
  ) {}

  // Observable to hold the list of deliveries
  deliveryList$?: Observable<Delivery[]>;

  // Lifecycle hook called after component initialization
  ngOnInit(): void {
    // Fetch the list of deliveries using the delivery service
    this.deliveryList$ = this.deliveryService.getDelivery();
  }
}
