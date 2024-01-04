import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/models-product/product.model';
import { Productservices } from '../../product/services-product/product.service';
import { CartItem } from './cart-service/models-cart/cart-item.model';
import { CartService } from './cart-service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/component/AuthGuard/auth.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  constructor(
    private productService: Productservices,
    private cartService: CartService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.model = {
      id : '',
      name : '',
      price : 0,
      imagePath : '',
      rating : 0,
      stockQuantity : 0,
      categoryName : '',
      description : '',
    }
    this.cartItemModel  = {
      id : '',
      userId : '',
      productId : '',
      quantity : 0,
    }
   }

   id: string | undefined;
   
  cartItemModel: CartItem;
  model: Product;
  cartItemsArray: CartItem[] = [];
  cartProducts: Product[] = []; // Liste des produits du panier

  
  ngOnInit(): void {
    this.cartService.getCartItemsByUserId(this.authService.userIdString).subscribe((data) => {
      // Assurez-vous que data est toujours un tableau, même si un seul élément est retourné
      this.cartItemsArray = Array.isArray(data) ? data : [data];
    
      // Pour chaque élément du panier, récupérer le produit associé
      for (const cartItem of this.cartItemsArray) {
        this.productService.getProductById(cartItem.productId.toString()).subscribe((cartProduct) => {
          // Ajouter le produit associé à la liste des produits du panier
          this.cartProducts.push(cartProduct);
        });
      }
    });
    }

  addQuantity(id: string) {

    const cartItem = this.cartItemsArray.find((item) => item.productId === id);

    if (cartItem) {
      cartItem.quantity += 1;

      this.cartService.updateCartItem(this.cartItemModel.id.toString(), cartItem).subscribe((updatedCartItem) => {
        
      });
    }
  }

  removeQuantity(id: string) {
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
