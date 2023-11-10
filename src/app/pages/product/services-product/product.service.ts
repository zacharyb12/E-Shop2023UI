import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models-product/product.model';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environments';
import { AddProduct } from '../models-product/add-product.model';
import { UpdateProduct } from '../models-product/update-product.model';

@Injectable({
  providedIn: 'root'
})
export class Productservices {

  constructor(
    private http : HttpClient,
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/api/Product`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiBaseUrl}/api/Product/${id}`);
  }


  addProduct(model: AddProduct): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Product`, model);//?addAuth=true
  }

  updateProduct(id: string, updateCategoryRequest: UpdateProduct) : Observable<Product> {
     return this.http.put<Product>(`${environment.apiBaseUrl}/api/Product/${id}`, //?addAuth=true
    updateCategoryRequest,);
  }

  deleteProduct(id: string) : Observable<Product> {
    return this.http.delete<Product>(`${environment.apiBaseUrl}/api/Product/${id}`,//?addAuth=true 
    )
  }
}
