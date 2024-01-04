import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuardAuthGuard } from './component/AuthGuard/guard-auth.guard';

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
import { LoginUserComponent } from './component/AuthGuard/login-user/login-user.component';
import { UserMenuComponent } from './user-interface/user-menu/user-menu.component';
import { UserViewComponent } from './user-interface/user-view/user-view.component';
import { FavoriteItemComponent } from './pages/favorite-item/favorite-item.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductByCategoryComponent } from './pages/product/product-by-category/product-by-category.component';
import { ProductUserViewComponent } from './pages/product/product-user-view/product-user-view.component';


const routes: Routes = [
  { path: '' , component:     HomepageComponent },
  { path: 'product/products', component: ProductListComponent},
  { path: 'product/products-add' , component: ProductAddComponent, canActivate: [GuardAuthGuard]},
  { path: 'product/product-edit/:id' , component: ProductEditComponent, canActivate: [GuardAuthGuard]},
  { path: 'product/product-details/:id' , component: ProductDetailsComponent , canActivate: [GuardAuthGuard]},
  { path: 'product/product-byCategory/:category' , component: ProductByCategoryComponent},
  { path: 'product/product-user-view' , component: ProductUserViewComponent},
  { path: 'categories/categories' , component: CategoriesListComponent ,  canActivate: [GuardAuthGuard]},
  { path: 'categories/categories-add' , component: CategoriesAddComponent, canActivate: [GuardAuthGuard]},
  { path: 'categories/categories-edit/:id' , component: CategoriesEditComponent, canActivate: [GuardAuthGuard]},
  { path: 'cart/cart-list' , component: CartListComponent, canActivate: [GuardAuthGuard]},
  { path: 'order/order-list' , component: OrderListComponent, canActivate: [GuardAuthGuard]},
  { path: 'order/order-add' , component: OrderAddComponent, canActivate: [GuardAuthGuard]},
   {path : 'order/order-details/:id' , component: OrderDetailsComponent},
  { path : 'order/order-update/:id' , component: OrderUpdateComponent, canActivate: [GuardAuthGuard]},
  { path: 'product-review/product-review-list' , component: ProductReviewListComponent, canActivate: [GuardAuthGuard]},
  { path: 'user/user-list' , component: UserListComponent, canActivate: [GuardAuthGuard]},
  { path: 'user/user-add' , component: UserAddComponent, canActivate: [GuardAuthGuard]},
  { path: 'user/user-update/:id' , component: UserUpdateComponent , canActivate: [GuardAuthGuard]},
  { path: 'user/user-details/:id' , component: UserDetailsComponent , canActivate: [GuardAuthGuard]},
  { path : 'user/login-user' , component: LoginUserComponent},
  { path : 'user-interface/user-menu' , component: UserMenuComponent , canActivate: [GuardAuthGuard]},
  { path : 'user-interface/user-view' , component: UserViewComponent},
  { path : 'favorite-item/favorite-item', component: FavoriteItemComponent, canActivate: [GuardAuthGuard]},
  { path : 'delivery/delivery', component: DeliveryComponent, canActivate: [GuardAuthGuard]},
  { path : 'payment/payment', component: PaymentComponent, canActivate: [GuardAuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
