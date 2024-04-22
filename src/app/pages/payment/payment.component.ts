// Import necessary Angular modules and dependencies
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from './service/payment.service';
import { Observable } from 'rxjs';
import { Payment } from './models/payment.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  // Constructor with HttpClient and PaymentService injection
  constructor(
    private http: HttpClient,
    private paymentService: PaymentService
  ) {
  }

  // Observable variable to store the list of payments
  paymentList$?: Observable<Payment[]>;

  // OnInit lifecycle hook, called when the component is initialized
  ngOnInit(): void {
    // Retrieve the list of payments using the PaymentService
    this.paymentList$ = this.paymentService.getPayment();
  }

}
