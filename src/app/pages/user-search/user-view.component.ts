// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/pages/product/models-product/product.model';
import { ProductReview } from 'src/app/pages/product-review/product-review.model';
import { Productservices } from 'src/app/pages/product/services-product/product.service';
import { CartItem, updateCartItem } from 'src/app/pages/cart/cart-list/cart-service/models-cart/cart-item.model';
import { CartService } from 'src/app/pages/cart/cart-list/cart-service/cart.service';
import { AuthService } from 'src/app/component/AuthGuard/auth.service';
import { ProductReviewService } from 'src/app/pages/product-review/product-review-service/product-review.service';
import { Category } from 'src/app/pages/categories/models-categories/categories.model';
import { Categoryservices } from 'src/app/pages/categories/services-categories/categories.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  
  // Initialize the cartItem
  cartItem: updateCartItem = {
    userId: this.authService.userIdString,
    productId: '',
    quantity: 1,
    itemPrice: 0
  };

  // Inject necessary services into the component
  constructor(
    private productService: Productservices,
    private productReviewService: ProductReviewService,
    private categoryService: Categoryservices,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  // Observables to hold product and review data
  products$?: Observable<Product[]>;
  searchProducts$?: Observable<Product[]>;
  productsReview$?: Observable<ProductReview[]>;

  // Variables for search and filtering
  selectedCategory: string = '';
  maxPrice: number = 10000;
  minPrice: number = 1;
  minRating: number = 0;
  categories: Observable<Category[]> = this.categoryService.getCategories();
  category?: string;

  // Lifecycle hook: ngOnInit is called after the component is initialized
  ngOnInit(): void {
    // Retrieve all products and product reviews
    this.products$ = this.productService.getAllProducts();
    this.productsReview$ = this.productReviewService.getAllProductsReview();
  }

  // Search term for product name
  search: string = '';

  // Method to search for products by name
  searchProduct(name: string): void {
    if (this.search) {
      this.searchProducts$ = this.productService.getProductByName(name);
    }
  }

  // Method to add a product to the cart
  addCart(productId: string, itemPrice: number): void {
    this.cartItem.productId = productId;
    this.cartItem.itemPrice = itemPrice;
    this.cartService.addCartItem(this.cartItem);
  }

  // Method to submit the search and filtering options
  onSubmit(): void {
    if (this.category && this.minPrice && this.maxPrice) {
      this.searchProducts$ = this.productService.getProductByOptions(
        this.category,
        this.minPrice,
        this.maxPrice
      );
    }
    else if (this.category) {
      this.searchProducts$ = this.productService.getProductByOptions(
        this.category,
        this.minPrice = 1,
        this.maxPrice = 1000)
    }
  }
}
