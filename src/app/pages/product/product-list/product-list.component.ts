import { Component, OnInit } from '@angular/core';
import { Productservices } from '../services-product/product.service';
import { Product } from '../models-product/product.model';
import { Observable } from 'rxjs';
import { ProductReviewService } from '../product-review-service/product-review.service';
import { ProductReview } from '../product-review/product-review.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  constructor(
    private productService : Productservices,
    private productReviewService : ProductReviewService
    ) {}

  products$? : Observable<Product[]>;
  productsReview$? : Observable<ProductReview[]>;
  
  ngOnInit(): void {
    this.products$ = this.productService.getAllProducts();
    this.productsReview$ = this.productReviewService.getAllProductsReview();
    
  }

}
