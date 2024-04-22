// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { Productservices } from '../services-product/product.service';
import { Product } from '../models-product/product.model';
import { Observable } from 'rxjs';
import { ProductReview } from '../../product-review/product-review.model';
import { ProductReviewService } from '../../product-review/product-review-service/product-review.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  // Constructor with necessary service injections
  constructor(
    private productService: Productservices,
    private productReviewService: ProductReviewService
  ) {}

  // Observable to store the list of products
  products$?: Observable<Product[]>;

  // Observable to store the list of product reviews
  productsReview$?: Observable<ProductReview[]>;
  
  // Method triggered when the component is initialized
  ngOnInit(): void {
    // Retrieve all products from the ProductService
    this.products$ = this.productService.getAllProducts();

    // Retrieve all product reviews from the ProductReviewService
    this.productsReview$ = this.productReviewService.getAllProductsReview();
  }
}
