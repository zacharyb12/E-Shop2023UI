import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models-product/product.model';
import { Observable, tap } from 'rxjs';
import { AddProduct } from '../models-product/add-product.model';
import { UpdateProduct } from '../models-product/update-product.model';
import { environment } from 'src/app/component/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class Productservices {

  constructor(
    private http : HttpClient,
  ) { }

  getAllProducts(): Observable<Product[]> { 
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/api/Product`);
  
}

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiBaseUrl}/api/Product/id?id=${id}`);
    
  }

  getProductByCategoryName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/api/Product/CategoryName?name=${name}`);
  }


  addProduct(model: AddProduct): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Product`, model);//?addAuth=true
  }

  updateProduct(id: string, updateProduct: UpdateProduct) : Observable<Product> {
     return this.http.put<Product>(`${environment.apiBaseUrl}/api/Product/id?id=${id}`, //?addAuth=true
    updateProduct)
  }

  updateProductInfo(product: UpdateProduct , info : string , id : string): Observable<Product> {
    return this.http.put<Product>(`${environment.apiBaseUrl}/api/Product/${id}`, info=`${info}`);
  }

  deleteProduct(id: string) : void {
    this.http.delete(`${environment.apiBaseUrl}/api/Product/id${id}`)//?addAuth=true 
  }
}
