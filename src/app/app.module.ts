import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/app/component/environments/environments';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './pages/product/product-add/product-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductEditComponent } from './pages/product/product-edit/product-edit.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { CategoriesAddComponent } from './pages/categories/categories-add/categories-add.component';
import { CategoriesEditComponent } from './pages/categories/categories-edit/categories-edit.component';
import { CartListComponent } from './pages/cart/cart-list/cart-list.component';
import { ProductDetailsComponent } from './pages/product/product-details/product-details.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { ProductReviewListComponent } from './pages/product/product-review/product-review-list/product-review-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { OrderAddComponent } from './pages/order/order-add/order-add.component';
import { OrderUpdateComponent } from './pages/order/order-update/order-update.component';
import { OrderDetailsComponent } from './pages/order/order-details/order-details.component';
import { LoginUserComponent } from './user-interface/login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductListComponent,
    NavbarComponent,
    ProductAddComponent,
    ProductEditComponent,
    CategoriesListComponent,
    CategoriesAddComponent,
    CategoriesEditComponent,
    CartListComponent,
    ProductDetailsComponent,
    OrderListComponent,
    ProductReviewListComponent,
    UserListComponent,
    UserUpdateComponent,
    UserAddComponent,
    UserDetailsComponent,
    OrderAddComponent,
    OrderUpdateComponent,
    OrderDetailsComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
