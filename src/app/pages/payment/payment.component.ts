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

  constructor(
    private http : HttpClient,
    private paymentService: PaymentService
  ){
  }

  paymentList$? : Observable<Payment[]>;
  ngOnInit(): void {
    this.paymentList$ = this.paymentService.getPayment();
  }


}
