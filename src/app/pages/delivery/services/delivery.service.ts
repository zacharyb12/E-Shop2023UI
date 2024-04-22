// Import necessary Angular modules and dependencies
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

  // Constructor with HttpClient injection
  constructor(
    private http: HttpClient
  ) { }

  // Method to get the list of deliveries
  getDelivery(): Observable<Delivery[]> | undefined {
    return this.http.get<Delivery[]>(`${environment.apiBaseUrl}/api/Delivery`);
  }

  // Method to create a new delivery
  createDelivery(model: CreateDelivery): Observable<Delivery> | undefined {
    return this.http.post<Delivery>(`${environment.apiBaseUrl}/api/Delivery`, model);
  }

  // Method to get a delivery by its ID
  getDeliveryById(id: string): Observable<Delivery> | undefined {
    return this.http.get<Delivery>(`${environment.apiBaseUrl}/api/Delivery/${id}`);
  }

  // Method to get deliveries by user ID
  getByUserId(id: string): Observable<Delivery> | undefined {
    return this.http.get<Delivery>(`${environment.apiBaseUrl}/api/Delivery/UserId/${id}`);
  }

  // Method to get deliveries by status
  getByStatus(status: string): Observable<Delivery> | undefined {
    return this.http.get<Delivery>(`${environment.apiBaseUrl}/api/Delivery/Status/${status}`);
  }
}
