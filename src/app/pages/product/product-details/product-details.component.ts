import { Component, OnInit } from '@angular/core';
import { Productservices } from '../services-product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models-product/product.model';
import { Observable, Subscription, map } from 'rxjs';
import { ProductReview } from '../product-review/product-review.model';
import { ProductReviewService } from '../product-review-service/product-review.service';
import { AuthService } from 'src/app/component/AuthGuard/auth.service';
import { Categoryservices } from '../../categories/services-categories/categories.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  modelProduct? : Product;
  model : string[] = [];
  texte : string = '';

  id : string | null = null;

  updateProductSubscription?: Subscription;
  isAdmin: any = this.authService.userStatus;

  constructor(
    private productService : Productservices,
    private productReviewService : ProductReviewService,
    private categoryService : Categoryservices,
    private router: Router,
    private route: ActivatedRoute,
    private authService : AuthService
  ) {  
    // this.modelProduct = {
    //   id : '',
    //   name : '',
    //   price : 0,
    //   imagePath : '',
    //   categoryName : '',
    //   description : '',
    //   rating : 0,
    //   stockQuantity : 0
    // }
    // this.model = {
    //   id: '',
    //   productId: 0,
    //   userId: 0,
    //   rating: 0,
    //   reviewText: '',
    //   reviewDate: new Date()
   //}
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {

      this.productService.getProductById(this.id).subscribe((product) => {
        this.modelProduct = product;
         this.productReviewService.getProductReviewById(this.modelProduct.id).subscribe(
          (review) => {
            review.forEach((e) => {
              this.model.push(e.reviewText.toString());
            })
         })});
         
          
    };}
    
  
  

  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId);
  }
}
