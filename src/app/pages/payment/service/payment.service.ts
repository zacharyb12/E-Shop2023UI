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

  constructor(
    private http : HttpClient
  ) { }

  getPayment() : Observable<Payment[]> | undefined {
    return this.http.get<Payment[]>(`${environment.apiBaseUrl}/api/Payment`)
  }

  CreatePayment (payment : CreatePayment) : Observable<CreatePayment> {
    return this.http.post<CreatePayment>(`${environment.apiBaseUrl}/api/Payment`, payment);
  }

  getPaymentById (id : string) : Observable<Payment> | undefined {
    return this.http.get<Payment>(`${environment.apiBaseUrl}/api/Payment/Id/${id}`);
  }

  getPaymentByUserId(id : string) : Observable<Payment> | undefined {
    return this.http.get<Payment>(`${environment.apiBaseUrl}/api/Payment/Id/${id}`);
  }

  updatePaymentStatus(id : string , model : UpdatePaymentStatus): Observable<UpdatePaymentStatus> | undefined {
    return this.http.put<UpdatePaymentStatus>(`${environment.apiBaseUrl}/api/Payment/Id/${id}`, model);
  }

}
