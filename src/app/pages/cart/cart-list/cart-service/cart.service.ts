import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem, updateCartItem } from './models-cart/cart-item.model';
import { Observable } from 'rxjs';
import { environment } from 'src/app/component/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http : HttpClient
  ) { }

  getAllCartItemByUserId() {
    return this.http.get<CartItem[]>(`${environment.apiBaseUrl}/api/CartItem`);
  }

  getCartItemsByUserId(id: string): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${environment.apiBaseUrl}/api/CartItem/${id}`);
  }
  

addCartItem(model: updateCartItem): Observable<void> {
  return this.http.post<void>(`${environment.apiBaseUrl}/api/CartItem`, model);
}

updateCartItem(id: string, updateCartItem: CartItem): Observable<CartItem> {
  return this.http.put<CartItem>(`${environment.apiBaseUrl}/api/CartItem/${id}`, updateCartItem);
}

deleteCartItem(id: string): Observable<CartItem> {
  return this.http.delete<CartItem>(`${environment.apiBaseUrl}/api/CartItem/${id}`);
}
  
  
}
