// Import necessary Angular modules and dependencies
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

  // Constructor with HttpClient injection
  constructor(
    private http: HttpClient,
  ) { }

  // Method to create a new favorite item
  createFavoriteItem(favoriteItem: CreateFavoriteItem): Observable<CreateFavoriteItem> {
    return this.http.post<CreateFavoriteItem>(`${environment.apiBaseUrl}/api/FavoriteItem`, favoriteItem);
  }

  // Method to get the favorite items for a user
  getFavoriteItem(userId: string): Observable<FavoriteItem[]> {
    return this.http.get<FavoriteItem[]>(`${environment.apiBaseUrl}/api/FavoriteItem/UserId?id=${userId}`);
  }

  // Method to delete a favorite item
  deleteFavoriteItem(userId: string, productId: string): void {
    this.http.delete<void>(`${environment.apiBaseUrl}/api/FavoriteItem?userId=${userId}&productId=${productId}`);
  }

  // Method to get a list of favorite items and retrieve corresponding product details
  GetFavoriteItemList(listFavoriteItem: Observable<string[]>): Observable<Product[]> {
    return listFavoriteItem.pipe(
      switchMap(ids => {
        if (ids.length === 0) {
          // If the list of IDs is empty, return an empty observable
          return of([]);
        }

        // Create query parameters with the list of IDs
        const params = ids.map(id => `id=${id}`).join('&');
        const url = `${environment.apiBaseUrl}/api/Product/ListId?${params}`;

        // Fetch products based on the list of IDs
        return this.http.get<Product[]>(url);
      })
    );
  }
}
