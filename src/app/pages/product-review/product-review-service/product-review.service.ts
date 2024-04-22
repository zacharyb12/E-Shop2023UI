// Import necessary Angular modules and dependencies
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductReview } from '../../product-review/product-review.model';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/component/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {

  constructor(
    private http: HttpClient
  ) { }

  // Method to get all product reviews
  getAllProductsReview(): Observable<ProductReview[]> {
    // Use HttpClient to make a GET request to retrieve all product reviews from the API
    return this.http.get<ProductReview[]>(`${environment.apiBaseUrl}/api/ProductReview`);
  }

  // Method to get product reviews by product ID
  getProductReviewById(id: string): Observable<ProductReview[]> {
    // Use HttpClient to make a GET request to retrieve product reviews by product ID from the API
    return this.http.get<ProductReview[]>(`${environment.apiBaseUrl}/api/ProductReview/ProductId?id=${id}`);
  }
}
