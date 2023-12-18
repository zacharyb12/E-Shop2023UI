import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AddUser } from '../models/add-user.model';
import { Observable } from 'rxjs';
import { UpdateUser } from '../models/update-user.model';
import { environment } from 'src/app/component/environments/environments';
import { loginUser } from '../models/login-user.model';

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
    return this.http.post<AddUser>(`${environment.apiBaseUrl}/api/User/register`, model);
  }

  updateUser(id: string, updateCategoryRequest: UpdateUser) : Observable<User> {
    return this.http.put<User>(`${environment.apiBaseUrl}/api/User/${id}`, //?addAuth=true
   updateCategoryRequest,);
 }

 loginUser(user : loginUser){
  return this.http.post<loginUser>(`${environment.apiBaseUrl}/api/User/Login`, user)

 }

 deleteUser(id: string) : Observable<User> {
   return this.http.delete<User>(`${environment.apiBaseUrl}/api/User/${id}`,//?addAuth=true
   
   )
 }
}
