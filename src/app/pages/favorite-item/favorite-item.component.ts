import { Component } from '@angular/core';
import { CreateFavoriteItem } from './models-favorite-item/create-favorite-item.model';
import { FavoriteItem } from './models-favorite-item/favorite-item.model';
import { Observable, map, observable } from 'rxjs';
import { Productservices } from '../product/services-product/product.service';
import { Product } from '../product/models-product/product.model';
import { FavoriteItemService } from './services-favorite-item/favorite-item-service.service';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent {

  /* list of favorite product */
  product$: Observable<Product[]> | undefined;

  /* id of user for id product deleteFavorite */
  userId: string = '';
  productId: string = '';

  model : CreateFavoriteItem;

  /* list of favorite product id */
  FavoriteList$ : Observable<FavoriteItem[]> | undefined;

  /* list of favorite id product */
  listFavoriteId : Observable<string[]> | undefined;

  constructor(
    private favoriteService: FavoriteItemService,
    private productService: Productservices
  ){
    this.model = {
      userId: '',
      productId: ''
    }
  }

  addFavoriteItem(createFavorite: CreateFavoriteItem): void {
    this.favoriteService.createFavoriteItem(createFavorite).subscribe(
      response => {
        // Traiter la réponse si nécessaire
        console.log(response);
      },
      error => {
        // Traiter les erreurs si nécessaire
        console.error(error);
      }
    );
  }
  
  
  deleteFavoriteItem(userId : string ,productId:string ): void | undefined {

    this.favoriteService.deleteFavoriteItem(this.userId, this.productId);
  }


  getFavoriteItem(userId : string): void{
    this.FavoriteList$ = this.favoriteService.getFavoriteItem(userId);
    this.listFavoriteId = this.getProductList(this.FavoriteList$);
    this.product$ = this.getFavoriteProduct(this.listFavoriteId);
    }


    getProductList(favoriteList: Observable<FavoriteItem[]>): Observable<string[]> {
      return favoriteList.pipe(
        map((favoriteList: any[]) => favoriteList.map(favoriteItem => favoriteItem.productId))
      );
    }
    
    getFavoriteProduct(id: Observable<string[]>): Observable<Product[]> {
      return this.favoriteService.GetFavoriteItemList(id);
    }
    
}


