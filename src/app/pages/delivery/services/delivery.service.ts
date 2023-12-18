import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from '../models/delivery.model';
import { CreateDelivery } from '../models/CreateDelivery.model';
import { environment } from 'src/app/component/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(
    private http: HttpClient
  ) { }

  getDelivery(): Observable<Delivery[]> | undefined {
    return this.http.get<Delivery[]>(`${environment.apiBaseUrl}/api/Delivery`);
  }

  createDelivery(model : CreateDelivery) : Observable<Delivery> | undefined {
    return this.http.post<Delivery>(`${environment.apiBaseUrl}/api/Delivery}`, model);
  }

  getDeliveryById(id : string) : Observable<Delivery> | undefined {
    return this.http.get<Delivery>(`${environment.apiBaseUrl}/api/Delivery/${id}`);
  }

  getByUserId(id : string) : Observable<Delivery> |undefined {
    return this.http.get<Delivery>(`${environment.apiBaseUrl}/api/Delivery/UserId/${id}`);
  }

  getByStatus(status : string) : Observable<Delivery> | undefined {
    return this.http.get<Delivery>(`${environment.apiBaseUrl}/api/Delivery/Status/${status}`);
  }

  
}
