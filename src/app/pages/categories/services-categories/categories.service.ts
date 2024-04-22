// Import necessary Angular modules and dependencies
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

  // Constructor with HttpClient injection
  constructor(
    private http: HttpClient,
  ) { }

  // Method to get the list of categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Category`);
  }

  // Method to get a category by its ID
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiBaseUrl}/api/Category/ById/${id}`);
  }

  // Method to get a category by its name
  getCategoryByName(name: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiBaseUrl}/api/Category/${name}`);
  }

  // Method to add a new category
  addCategory(model: AddCategory): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Category`, model);
  }

  // Method to update a category
  updateCategory(id: string, category: UpdateCategory): Observable<Category> {
    return this.http.put<Category>(`${environment.apiBaseUrl}/api/Category/${id}`, category);
  }

  // Method to delete a category
  deleteCategory(id: string): Observable<Category> {
    return this.http.delete<Category>(`${environment.apiBaseUrl}/api/Category/${id}`);
  }
}
