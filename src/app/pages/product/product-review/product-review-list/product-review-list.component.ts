import { Component } from '@angular/core';
import { ProductReviewService } from '../../product-review-service/product-review.service';
import { ProductReview } from '../product-review.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-review-list',
  templateUrl: './product-review-list.component.html',
  styleUrls: ['./product-review-list.component.css']
})
export class ProductReviewListComponent {


  constructor(
    private productReviewService : ProductReviewService
    ) {}

  productsReview$? : Observable<ProductReview[]>;
  
  ngOnInit(): void {

    this.productsReview$ = this.productReviewService.getAllProductsReview();
    
  }
}
