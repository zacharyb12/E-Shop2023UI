// Import necessary Angular modules and dependencies
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

  // Inject the HttpClient service into the UserService
  constructor(private http: HttpClient) {}

  // getAllUsers: Fetches all users from the API
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiBaseUrl}/api/User`);
  }

  // getUserById: Fetches a user by ID from the API
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiBaseUrl}/api/User/${id}`);
  }

  // addUser: Adds a new user using the provided data
  addUser(model: AddUser): Observable<AddUser> {
    return this.http.post<AddUser>(`${environment.apiBaseUrl}/api/User/register`, model);
  }

  // updateUser: Updates an existing user by ID with new data
  updateUser(id: string, updateCategoryRequest: UpdateUser): Observable<User> {
    return this.http.put<User>(
      `${environment.apiBaseUrl}/api/User/${id}`,
      updateCategoryRequest
    );
  }

  // loginUser: Performs user login by sending login credentials to the API
  loginUser(user: loginUser): Observable<loginUser> {
    return this.http.post<loginUser>(`${environment.apiBaseUrl}/api/User/Login`, user);
  }

  // deleteUser: Deletes a user by ID
  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${environment.apiBaseUrl}/api/User/${id}`);
  }
}
