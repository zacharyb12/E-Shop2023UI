// Import necessary Angular modules and dependencies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models-product/product.model';
import { Observable } from 'rxjs';
import { AddProduct } from '../models-product/add-product.model';
import { UpdateProduct } from '../models-product/update-product.model';
import { environment } from 'src/app/component/environments/environments';
import { Category } from '../../categories/models-categories/categories.model';

@Injectable({
  providedIn: 'root'
})
export class Productservices {

  constructor(
    private http: HttpClient,
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

  getProductByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/api/Product/name?name=${name}`);
  }

  getProductByOptions(category: string, minPrice: number, maxPrice: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/api/Product/Options?category=${category.toString()}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
  }

  addProduct(model: AddProduct): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/api/Product`, model);
  }

  updateProduct(id: string, updateProduct: UpdateProduct): Observable<Product> {
    return this.http.put<Product>(`${environment.apiBaseUrl}/api/Product/id?id=${id}`, updateProduct);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/api/Product/deleteId?id=${id}`);
  }
  
  
}

