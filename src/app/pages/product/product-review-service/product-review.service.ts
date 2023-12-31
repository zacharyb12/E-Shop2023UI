import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductReview } from '../product-review/product-review.model';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/component/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {

  constructor(
    private http : HttpClient
  ) { }

  getAllProductsReview() {
    return this.http.get<ProductReview[]>(`${environment.apiBaseUrl}/api/ProductReview`);
  }

  getProductReviewById(id: string): Observable<ProductReview[]> {
    return this.http.get<ProductReview[]>(`${environment.apiBaseUrl}/api/ProductReview/ProductId?id=${id}`);
  }

}
