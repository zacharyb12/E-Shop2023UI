// Import necessary Angular modules and dependencies
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Productservices } from '../services-product/product.service';
import { Product } from '../models-product/product.model';
import { ProductReview } from '../../product-review/product-review.model';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { ProductReviewService } from '../../product-review/product-review-service/product-review.service';
import { updateCartItem } from '../../cart/cart-list/cart-service/models-cart/cart-item.model';
import { CartService } from '../../cart/cart-list/cart-service/cart.service';
import { AuthService } from 'src/app/component/AuthGuard/auth.service';

@Component({
  selector: 'app-product-user-view',
  templateUrl: './product-user-view.component.html',
  styleUrls: ['./product-user-view.component.css']
})
export class ProductUserViewComponent implements OnInit, OnDestroy {

  // Constructor with necessary service injections
  constructor(
    private productService: Productservices,
    private productReviewService: ProductReviewService,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  // Subject to manage component destruction
  destroy = new Subject<boolean>();

  // Observable to store the list of products
  products?: Observable<Product[]>;

  // Observable to store the list of product reviews
  productsReview$?: Observable<ProductReview[]>;

  // Method triggered when the component is initialized
  ngOnInit(): void {
    // Retrieve all product reviews from the ProductReviewService
    this.productsReview$ = this.productReviewService.getAllProductsReview();

    // Retrieve all products from the ProductService and filter out those with zero stock
    this.products = this.productService.getAllProducts().pipe(
      takeUntil(this.destroy),
      map((product) => product.filter((product) => product.stockQuantity > 0))
    );
  }

  // Method to add a product to the user's cart
  addToCart(product: Product): void {
    // Create a cart item with the necessary details
    const cartItem: updateCartItem = {
      userId: this.authService.userIdString,
      productId: product.id,
      quantity: 1,
      itemPrice: product.price
    };

    // Call the CartService to add the cart item to the user's cart
    this.cartService.addCartItem(cartItem);
    console.log("fin de add cart");
  }

  // Method triggered when the component is destroyed
  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }
}
