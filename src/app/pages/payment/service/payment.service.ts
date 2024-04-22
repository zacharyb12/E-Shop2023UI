// Import necessary Angular modules and dependencies
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/component/environments/environments';
import { Payment } from '../models/payment.model';
import { CreatePayment } from '../models/CeatePayment.model';
import { UpdatePaymentStatus } from '../models/UpdatePaymentStatus.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  // Constructor with HttpClient injection
  constructor(
    private http: HttpClient
  ) { }

  // Method to get a list of payments
  getPayment(): Observable<Payment[]> | undefined {
    return this.http.get<Payment[]>(`${environment.apiBaseUrl}/api/Payment`);
  }

  // Method to create a new payment
  CreatePayment(payment: CreatePayment): Observable<CreatePayment> {
    return this.http.post<CreatePayment>(`${environment.apiBaseUrl}/api/Payment`, payment);
  }

  // Method to get payment details by ID
  getPaymentById(id: string): Observable<Payment> | undefined {
    return this.http.get<Payment>(`${environment.apiBaseUrl}/api/Payment/Id/${id}`);
  }

  // Method to get payment details by user ID
  getPaymentByUserId(id: string): Observable<Payment> | undefined {
    return this.http.get<Payment>(`${environment.apiBaseUrl}/api/Payment/Id/${id}`);
  }

  // Method to update payment status by ID
  updatePaymentStatus(id: string, model: UpdatePaymentStatus): Observable<UpdatePaymentStatus> | undefined {
    return this.http.put<UpdatePaymentStatus>(`${environment.apiBaseUrl}/api/Payment/Id/${id}`, model);
  }

}
