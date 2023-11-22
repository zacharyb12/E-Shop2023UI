import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Category } from '../models-categories/categories.model';
import { AddCategory } from '../models-categories/add-categories.model';
import { UpdateCategory } from '../models-categories/update-categories.model';
import { environment } from 'src/app/component/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class Categoryservices {

  constructor(
    private http : HttpClient,
  ) { }

 // Méthode pour obtenir la liste des catégories
 getCategories(): Observable<Category[]> {
  return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Category`);
}

 // Méthode pour obtenir une catégorie par son ID
 getCategoryById(id: string): Observable<Category> {
  return this.http.get<Category>(`${environment.apiBaseUrl}/api/Category/${id}`);
}

addProduct(model: AddCategory): Observable<void> {
  return this.http.post<void>(`${environment.apiBaseUrl}/api/Category`, model);//?addAuth=true
}

// Méthode pour mettre à jour une catégorie
updateCategory(id: string, category: UpdateCategory): Observable<Category> {
  return this.http.put<Category>(`${environment.apiBaseUrl}/api/Category/${id}`, category);
}

// Méthode pour supprimer une catégorie
deleteCategory(id: string): Observable<Category> {
  return this.http.delete<Category>(`${environment.apiBaseUrl}/api/Category/${id}`);
}
}
