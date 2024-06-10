import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { environment } from 'src/app/component/environments/environments';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { ProductReviewListComponent } from './pages/product-review/product-review-list/product-review-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-interface/user-update/user-update.component';
import { UserAddComponent } from './user/user-interface/user-add/user-add.component';
import { UserDetailsComponent } from './user/user-interface/user-details/user-details.component';
import { OrderAddComponent } from './pages/order/order-add/order-add.component';
import { OrderUpdateComponent } from './pages/order/order-update/order-update.component';
import { OrderDetailsComponent } from './pages/order/order-details/order-details.component';
import { LoginUserComponent } from './component/AuthGuard/login-user/login-user.component';
import { UserMenuComponent } from './user/user-interface/user-menu/user-menu.component';
import { UserViewComponent } from './pages/user-search/user-view.component';
import { FavoriteItemComponent } from './pages/favorite-item/favorite-item.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductUserViewComponent } from './pages/product/product-user-view/product-user-view.component';
import { TokenInterceptor } from './component/AuthGuard/token.interceptor';
import { ProductReviewEditComponent } from './pages/product-review/product-review-edit/product-review-edit.component';
import { LateralImageComponent } from './component/lateral-image/lateral-image.component';
import { ProductDetailsForUserComponent } from './pages/product/product-details-for-user/product-details-for-user.component';
import { FooterComponent } from './component/footer/footer.component';

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
    LoginUserComponent,
    UserMenuComponent,
    UserViewComponent,
    FavoriteItemComponent,
    DeliveryComponent,
    PaymentComponent,
    ProductUserViewComponent,
    ProductUserViewComponent,
    ProductReviewEditComponent,
    LateralImageComponent,
    ProductDetailsForUserComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
