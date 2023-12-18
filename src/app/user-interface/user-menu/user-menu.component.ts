import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/pages/product/models-product/product.model';
import { Productservices } from 'src/app/pages/product/services-product/product.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  
constructor(private productService : Productservices,)
{

}

  products$: Observable<Product[]> = new Observable<Product[]>();
  
  ngOnInit(): void {

    this.products$ = this.productService.getAllProducts();
  
  }



}
