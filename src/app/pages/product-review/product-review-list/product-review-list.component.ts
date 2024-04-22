// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { ProductReview } from '../product-review.model';
import { Observable } from 'rxjs';
import { ProductReviewService } from '../product-review-service/product-review.service';

@Component({
  selector: 'app-product-review-list',
  templateUrl: './product-review-list.component.html',
  styleUrls: ['./product-review-list.component.css']
})
export class ProductReviewListComponent implements OnInit {

  // Declare an observable to hold the product reviews
  productsReview$?: Observable<ProductReview[]>;

  // Inject the ProductReviewService into the component
  constructor(private productReviewService: ProductReviewService) {}

  // Implement the ngOnInit lifecycle hook to initialize the component
  ngOnInit(): void {
    // Retrieve all product reviews and assign them to the observable
    this.productsReview$ = this.productReviewService.getAllProductsReview();
  }
}
