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

constructor( 
  private deliveryService: DeliveryService,
) {}

deliveryList$? : Observable<Delivery[]>;

  ngOnInit(): void {
    this.deliveryList$ =  this.deliveryService.getDelivery();
  }



}
