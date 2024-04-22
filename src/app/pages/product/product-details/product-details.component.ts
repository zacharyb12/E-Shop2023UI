// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { Productservices } from '../services-product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models-product/product.model';
import { Observable, Subscription, map } from 'rxjs';
import { ProductReview } from '../../product-review/product-review.model';
import { AuthService } from 'src/app/component/AuthGuard/auth.service';
import { Categoryservices } from '../../categories/services-categories/categories.service';
import { ProductReviewService } from '../../product-review/product-review-service/product-review.service';
import { CartItem, updateCartItem } from '../../cart/cart-list/cart-service/models-cart/cart-item.model';
import { CartService } from '../../cart/cart-list/cart-service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // Variables to hold product details, reviews, and cart item
  modelProduct?: Product;
  model: string[] = [];
  texte: string = '';
  cartItem: CartItem;
  id: string | null = null;

  // Subscription to handle product updates
  updateProductSubscription?: Subscription;

  // Variable to check if the user is an admin
  isAdmin = this.authService.userStatus;

  // Constructor with necessary service injections
  constructor(
    private productService: Productservices,
    private productReviewService: ProductReviewService,
    private categoryService: Categoryservices,
    private cartItemService: CartService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.cartItem = {
      id: '',
      userId: '',
      productId: '',
      itemPrice: 0,
      quantity: 0,
      totalPrice: 0
    };
  }

  // Method triggered when the component is initialized
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      // Retrieve product details by ID
      this.productService.getProductById(this.id).subscribe((product) => {
        this.modelProduct = product;

        // Retrieve product reviews for the current product
        this.productReviewService.getProductReviewById(this.modelProduct.id).subscribe(
          (review) => {
            review.forEach((e) => {
              this.model.push(e.reviewText.toString());
            });
          }
        );
      });
    }
  }

  // Method to add the current product to the user's cart
  addCart() {
    if (this.modelProduct != null) {
      this.cartItem.userId = this.authService.userIdString;
      this.cartItem.productId = this.modelProduct.id;
      this.cartItem.quantity = 1;
      this.cartItem.itemPrice = this.modelProduct.price;

      // Update the cart item in the CartService
      this.cartItemService.updateCartItem(this.cartItem.userId, this.cartItem);
      console.log("addCartOk");
    }
  }

  // Method to delete the current product (admin functionality)
  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId);
  }
}
