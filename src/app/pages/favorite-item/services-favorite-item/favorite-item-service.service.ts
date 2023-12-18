import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/component/environments/environments';
import { CreateFavoriteItem } from '../models-favorite-item/create-favorite-item.model';
import { Observable, of, switchMap } from 'rxjs';
import { FavoriteItem } from '../models-favorite-item/favorite-item.model';
import { Product } from '../../product/models-product/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteItemService {

  constructor(
    private http : HttpClient,
  ) { }

  createFavoriteItem(favoriteItem: CreateFavoriteItem): Observable<CreateFavoriteItem> {
    return this.http.post<CreateFavoriteItem>(`${environment.apiBaseUrl}/api/FavoriteItem`, favoriteItem);
  }

  getFavoriteItem(userId : string){
    return this.http.get<FavoriteItem[]>(`${environment.apiBaseUrl}/api/FavoriteItem/UserId?id=${userId}`);
  }

  deleteFavoriteItem(userId: string, productId: string): void {
     this.http.delete<void>(`${environment.apiBaseUrl}/api/FavoriteItem?userId=${userId}&productId=${productId}`);
                                                                              
  }

  GetFavoriteItemList(listFavoriteItem: Observable<string[]>): Observable<Product[]> {
    return listFavoriteItem.pipe(
      switchMap(ids => {
        if (ids.length == 0) {
          // Si la liste d'ID est vide, retourner un observable vide
          return of([]);
        }
  
        const params = ids.map(id => `id=${id}`).join('&');
        const url = `${environment.apiBaseUrl}/api/Product/ListId?${params}`;
  
        return this.http.get<Product[]>(url);
      })
    );
  }
}
