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

  // Method to retrieve all products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/api/Product`);
  }

  // Method to retrieve a product by its ID
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiBaseUrl}/api/Product/id?id=${id}`);
  }

  // Method to retrieve products by category name
  getProductByCategoryName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/api/Product/CategoryName?name=${name}`);
  }

  // Method to retrieve products by name
  getProductByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/api/Product/name?name=${name}`);
  }

  // Method to retrieve products based on category, minimum price, and maximum price
  getProductByOptions(category: string, minPrice: number, maxPrice: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/api/Product/Options?category=${category.toString()}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
  }

  // Method to add a new product
  addProduct(model: AddProduct): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Product`, model);
  }

  // Method to update a product by its ID
  updateProduct(id: string, updateProduct: UpdateProduct): Observable<Product> {
    return this.http.put<Product>(`${environment.apiBaseUrl}/api/Product/id?id=${id}`, updateProduct);
  }

  // Method to delete a product by its ID
  deleteProduct(id: string): void {
    this.http.delete(`${environment.apiBaseUrl}/api/Product/id${id}`);
  }
}
