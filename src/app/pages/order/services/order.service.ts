import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { AddOrder } from '../models/AddOrder.model';
import { UpdateOrder } from '../models/UpdateOrder.model';
import { environment } from 'src/app/component/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class OrderService{

  constructor(
    private http: HttpClient,
  ) { }


  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiBaseUrl}/api/Order`);
  }

  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`${environment.apiBaseUrl}/api/Order/${id}`);
  }


  addOrder(model: AddOrder): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Order`, model);//?addAuth=true
  }

  updateOrder(id: string, updateCategoryRequest: UpdateOrder) : Observable<Order> {
     return this.http.put<Order>(`${environment.apiBaseUrl}/api/Order/${id}`, //?addAuth=true
    updateCategoryRequest,);
  }

  deleteOrder(id: string) : Observable<Order> {
    return this.http.delete<Order>(`${environment.apiBaseUrl}/api/Order/${id}`,//?addAuth=true 
    )
  }
}
