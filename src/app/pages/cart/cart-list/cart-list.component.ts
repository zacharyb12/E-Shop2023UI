// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/models-product/product.model';
import { Productservices } from '../../product/services-product/product.service';
import { CartItem, updateCartItem } from './cart-service/models-cart/cart-item.model';
import { CartService } from './cart-service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/component/AuthGuard/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  id: string | undefined;
  cartItemModel: CartItem; // Cart item model
  model: Product; // Product model
  cartItemsArray: CartItem[] = []; // Array to store cart items
  cartProducts: Product[] = []; // Array to store products in the cart

  // Constructor with injections of necessary services and dependencies
  constructor(
    private productService: Productservices,
    private cartService: CartService,
    private route: ActivatedRoute,
    private authService: AuthService

  ) {
    // Initialize the product model
    this.model = {
      id: '',
      name: '',
      price: 0,
      imagePath: [''],
      rating: 0,
      stockQuantity: 0,
      categoryName: '',
      description: '',
    };

    // Initialize the cart item model
    this.cartItemModel = {
      id: '',
      userId: '',
      productId: '',
      quantity: 0,
      itemPrice: this.model.price,
      totalPrice: 0,
    };
  }



  // Lifecycle hook called after component initialization
  ngOnInit() {
    // Fetch cart items for the current user
    this.cartService.getCartItemsByUserId(this.authService.userIdString).subscribe(
      (cartItems) => {
        // Update the cart items array
        this.cartItemsArray = cartItems;

        // Iterate through each cart item
        this.cartItemsArray.forEach((cartItem) => {
          // Fetch the corresponding product for each cart item
          this.productService.getProductById(cartItem.productId).subscribe(
            (product) => {
              // Update the cart products array
              this.cartProducts.push(product);

              // Update the cart item model with the retrieved product details
              this.updateCartItemModel(cartItem, product);

              return this.cartProducts;
            }
          );
        });
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  // Method to increase the quantity of a cart item
  addQuantity(): void {
    this.cartItemModel.quantity += 1;
    this.cartItemModel.totalPrice += this.cartItemModel.itemPrice;
    this.updateCartItem();
  }

  // Method to decrease the quantity of a cart item
  removeQuantity(): void {
    if (this.cartItemModel.quantity === 1) {
      this.cartItemModel.totalPrice -= this.cartItemModel.itemPrice;
      this.cartService.deleteCartItem(this.cartItemModel.id);
    } else {
      this.cartItemModel.quantity -= 1;
      this.updateCartItem();
    }
  }

  // Private method to update a cart item's details
  private updateCartItem(): void {
    this.cartItemModel.totalPrice = this.cartItemModel.itemPrice * this.cartItemModel.quantity;
    this.cartService.updateCartItem(this.cartItemModel.id, this.cartItemModel);
  }

  // Private method to update the cart item model with product details
  private updateCartItemModel(cartItem: CartItem, product: Product): void {
    this.cartItemModel.totalPrice = cartItem.quantity * cartItem.itemPrice;
    this.cartItemModel.itemPrice = cartItem.itemPrice;
  }
}
