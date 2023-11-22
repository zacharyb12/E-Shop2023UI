import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { ProductAddComponent } from './pages/product/product-add/product-add.component';
import { ProductEditComponent } from './pages/product/product-edit/product-edit.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { CategoriesAddComponent } from './pages/categories/categories-add/categories-add.component';
import { CategoriesEditComponent } from './pages/categories/categories-edit/categories-edit.component';
import { CartListComponent } from './pages/cart/cart-list/cart-list.component';
import { ProductDetailsComponent } from './pages/product/product-details/product-details.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { ProductReviewListComponent } from './pages/product/product-review/product-review-list/product-review-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { OrderAddComponent } from './pages/order/order-add/order-add.component';
import { OrderDetailsComponent } from './pages/order/order-details/order-details.component';
import { OrderUpdateComponent } from './pages/order/order-update/order-update.component';
import { LoginUserComponent } from './user-interface/login-user/login-user.component';


const routes: Routes = [
  { path: '' , component: HomepageComponent   },
  { path: 'product/products', component: ProductListComponent},
  { path: 'product/products-add' , component: ProductAddComponent},
  { path: 'product/product-edit/:id' , component: ProductEditComponent},
  { path: 'product/product-details/:id' , component: ProductDetailsComponent},
  { path: 'categories/categories' , component: CategoriesListComponent},
  { path: 'categories/categories-add' , component: CategoriesAddComponent},
  { path: 'categories/categories-edit/:id' , component: CategoriesEditComponent},
  { path: 'cart/cart-list' , component: CartListComponent},
  { path: 'order/order-list' , component: OrderListComponent},
  { path: 'order/order-add' , component: OrderAddComponent},
  {path : 'order/order-details/:id' , component: OrderDetailsComponent},
  {path : 'order/order-update/:id' , component: OrderUpdateComponent},
  { path: 'product-review/product-review-list' , component: ProductReviewListComponent},
  { path: 'user/user-list' , component: UserListComponent},
  { path: 'user/user-add' , component: UserAddComponent},
  { path: 'user/user-update/:id' , component: UserUpdateComponent},
  { path: 'user/user-details/:id' , component: UserDetailsComponent},
  {path : 'user/login-user' , component: LoginUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
