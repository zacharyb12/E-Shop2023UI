import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/pages/product/models-product/product.model';
import { ProductReviewService } from 'src/app/pages/product/product-review-service/product-review.service';
import { ProductReview } from 'src/app/pages/product/product-review/product-review.model';
import { Productservices } from 'src/app/pages/product/services-product/product.service';
import { FormsModule } from '@angular/forms';
import { CartItem } from 'src/app/pages/cart/cart-list/cart-service/models-cart/cart-item.model';
import { CartService } from 'src/app/pages/cart/cart-list/cart-service/cart.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent  implements OnInit {
  

  constructor(
    private productService : Productservices,
    private productReviewService : ProductReviewService,
    private cartService : CartService
    ) {}

  products$? : Observable<Product[]>;
  searchProducts$? : Observable<Product[]>;
  productsReview$? : Observable<ProductReview[]>;
  cartItem$? : Observable<CartItem[]>;

  
  ngOnInit(): void {
    this.products$ = this.productService.getAllProducts();
    this.productsReview$ = this.productReviewService.getAllProductsReview();
    this.cartItem$ = this.cartService.getAllCartItem();
    
  }

  search : string = '';
  searchProduct(name: string): void {
    if(this.search)
    {
      this.searchProducts$ = this.productService.getProductByCategoryName(name);
    }
    
  }
}
