import { Component, OnDestroy, OnInit } from '@angular/core';
import { Productservices } from '../services-product/product.service';
import { ProductReviewService } from '../product-review-service/product-review.service';
import { Product } from '../models-product/product.model';
import { ProductReview } from '../product-review/product-review.model';
import { Observable , Subject, map, takeUntil  } from 'rxjs';

@Component({
  selector: 'app-product-user-view',
  templateUrl: './product-user-view.component.html',
  styleUrls: ['./product-user-view.component.css']
})
export class ProductUserViewComponent implements OnInit , OnDestroy {

  constructor(
    private productService : Productservices,
    private productReviewService : ProductReviewService
    ) {}


  ngOnDestroy(): void {
    this.destroy.complete();
  }


    destroy = new Subject<boolean>();
  products? : Observable<Product[]>;
  productsReview$? : Observable<ProductReview[]>;
  
  ngOnInit(): void {
    this.productsReview$ = this.productReviewService.getAllProductsReview();
    this.products = this.productService.getAllProducts().pipe(
      takeUntil(this.destroy),
      map((product) => product.filter(
        (product) => product.stockQuantity > 0)
        ));
  }
}
