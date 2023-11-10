import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/app/pages/product/environments/environments';
import { AddUser } from '../models/add-user.model';
import { Observable } from 'rxjs';
import { UpdateUser } from '../models/update-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers() {
    return this.http.get<User[]>(`${environment.apiBaseUrl}/api/User`);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiBaseUrl}/api/User/${id}`);
  }

  addUser(model : AddUser){
    return this.http.post<User>(`${environment.apiBaseUrl}/api/User`, model);
  }

  updateUser(id: string, updateCategoryRequest: UpdateUser) : Observable<User> {
    return this.http.put<User>(`${environment.apiBaseUrl}/api/User/${id}`, //?addAuth=true
   updateCategoryRequest,);
 }

 deleteUser(id: string) : Observable<User> {
   return this.http.delete<User>(`${environment.apiBaseUrl}/api/User/${id}`,//?addAuth=true
   
   )
 }
}
