import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from './models-cart/cart-item.model';
import { environment } from 'src/app/pages/product/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http : HttpClient
  ) { }

  getAllCartItem() {
    return this.http.get<CartItem[]>(`${environment.apiBaseUrl}/api/CartItem`);
  }

  getCartItemById(id: string) : Observable<CartItem> {
   var cartItem =  this.http.get<CartItem>(`${environment.apiBaseUrl}/api/CartItem/${id}`);
   return cartItem;
  }


  addCartItem(model: CartItem): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/CartItem`, model);//?addAuth=true
  }

  updateCartItem(id: string, updateCategoryRequest: CartItem) : Observable<CartItem> {
     return this.http.put<CartItem>(`${environment.apiBaseUrl}/api/CartItem/${id}`, //?addAuth=true
    updateCategoryRequest,);
  }

  deleteCartItem(id: string) : Observable<CartItem> {
    return this.http.delete<CartItem>(`${environment.apiBaseUrl}/api/CartItem/${id}`,//?addAuth=true
    
    )
  }

  updateCartItemQuantity(id: number, newQuantity: number): Observable<CartItem> {
    const updateCategoryRequest = { quantity: newQuantity };
    return this.http.put<CartItem>(`${environment.apiBaseUrl}/api/CartItem/${id}`, updateCategoryRequest);
  }
  
}
