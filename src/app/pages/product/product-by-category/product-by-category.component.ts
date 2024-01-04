import { Component, OnInit } from '@angular/core';
import { Productservices } from '../services-product/product.service';
import { ProductReviewService } from '../product-review-service/product-review.service';
import { Product } from '../models-product/product.model';
import { ProductReview } from '../product-review/product-review.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {

  category : string = '';
  
  constructor(
    private productService : Productservices,
    private productReviewService : ProductReviewService,
    private route: ActivatedRoute
    ) {}

  products$? : Observable<Product[]>;
  productsReview$? : Observable<ProductReview[]>;
  
  ngOnInit(): void {
    // Utilisez le service ActivatedRoute pour récupérer les paramètres de la route
    this.route.params.subscribe(params => {
      this.category = params['category'];
      
      this.products$ = this.productService.getProductByCategoryName(this.category);
      this.productsReview$ = this.productReviewService.getAllProductsReview();
    });
  }
}
