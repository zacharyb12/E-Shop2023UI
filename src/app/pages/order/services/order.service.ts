// Import necessary Angular modules and dependencies
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { AddOrder } from '../models/AddOrder.model';
import { UpdateOrder } from '../models/UpdateOrder.model';
import { environment } from 'src/app/component/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // Constructor with HttpClient injection
  constructor(
    private http: HttpClient,
  ) { }

  // Method to get the list of all orders
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiBaseUrl}/api/Order`);
  }

  // Method to get an order by its ID
  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`${environment.apiBaseUrl}/api/Order/Id?id=${id}`);
  }

  // Method to add a new order
  addOrder(model: AddOrder): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Order`, model);
  }

  // Method to update an existing order
  updateOrder(id: string, updateCategoryRequest: UpdateOrder): Observable<Order> {
    return this.http.put<Order>(
      `${environment.apiBaseUrl}/api/Order/${id}`,
      updateCategoryRequest,
    );
  }

  // Method to delete an order by its ID
  deleteOrder(id: string): Observable<Order> {
    return this.http.delete<Order>(`${environment.apiBaseUrl}/api/Order/${id}`);
  }
}
