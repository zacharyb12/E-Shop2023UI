import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/models-product/product.model';
import { Productservices } from '../../product/services-product/product.service';
import { CartItem } from './cart-service/models-cart/cart-item.model';
import { CartService } from './cart-service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  constructor(
    private productService: Productservices,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.model = {
      id : 1,
      name : '',
      price : 0,
      imagePath : '',
      categoryId : '',
      description : '',
    }
    this.cartItemModel  = {
      id : 0,
      userId : 0,
      productId : 0,
      quantity : 0,
    }
   }

   id: string | undefined;
   
  cartItemModel: CartItem;
  model: Product;
  cartItemsArray: CartItem[] = [];
  cartProducts: Product[] = []; // Liste des produits du panier

  ngOnInit(): void {
    this.cartService.getAllCartItem().subscribe((data) => {
      this.cartItemsArray = data;


      for (const cartItem of this.cartItemsArray) {
        this.productService.getProductById(cartItem.productId.toString()).subscribe((product) => {
          this.cartProducts.push(product);
        });
      }
    });

    this.id = this.route.snapshot.paramMap.get('id')?.toString();
    if (this.id) {
      this.productService.getProductById(this.id.toString()).subscribe((product) => {
        this.model = product;
        this.cartProducts.push(product); 
      });
    }
  }

  addQuantity(id: number) {

    const cartItem = this.cartItemsArray.find((item) => item.productId === id);

    if (cartItem) {
      cartItem.quantity += 1;

      this.cartService.updateCartItem(this.cartItemModel.id.toString(), cartItem).subscribe((updatedCartItem) => {
        
      });
    }
  }

  removeQuantity(id: number) {
    // Trouver l'élément correspondant dans le panier
    const cartItem = this.cartItemsArray.find((item) => item.productId === id);

    if (cartItem) {
      // Diminuer la quantité de 1 (ou ajustez selon votre logique)
      cartItem.quantity -= 1;

      if (cartItem.quantity < 1) {
        // Supprimer l'élément du panier si la quantité devient inférieure à 1
        this.cartItemsArray = this.cartItemsArray.filter((item) => item.productId !== id);
      }

      // Mettre à jour le panier dans le service
      this.cartService.updateCartItemQuantity(this.cartItemModel.id, this.cartItemModel.quantity).subscribe((updatedCartItem) => {
        // Gérez la réponse du service si nécessaire
      });
      
    }
  }
}
