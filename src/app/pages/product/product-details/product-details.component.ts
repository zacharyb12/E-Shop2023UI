import { Component, OnInit } from '@angular/core';
import { Productservices } from '../services-product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models-product/product.model';
import { Subscription } from 'rxjs';
import { ProductReview } from '../product-review/product-review.model';
import { ProductReviewService } from '../product-review-service/product-review.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  modelProduct : Product;
  model : ProductReview;

  id : string | null = null;

  updateProductSubscription?: Subscription;

  constructor(
    private productService : Productservices,
    private productReviewService : ProductReviewService,
    private router: Router,
    private route: ActivatedRoute
  ) {  
    this.modelProduct = {
      id : 0,
      name : '',
      price : 0,
      imagePath : '',
      categoryId : '',
      description : '',
    }
    this.model = {
      id: 0,
      productId: 0,
      userId: 0,
      rating: 0,
      reviewText: '',
      reviewDate: new Date()
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProductById(this.id).subscribe((product) => {
        this.modelProduct = product;
      });

      this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productReviewService.getProductReviewById(this.id).subscribe((ProductReview) => {
        this.model = ProductReview;
      });
    }


  }
}
}
