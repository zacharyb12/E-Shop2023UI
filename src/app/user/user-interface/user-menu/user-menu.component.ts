// Import necessary Angular modules and dependencies
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
  
  // Inject the ProductService into the component
  constructor(private productService: Productservices) {}

  // Observable to hold the product data
  products$: Observable<Product[]> = new Observable<Product[]>();
  
  // Lifecycle hook: ngOnInit is called after the component is initialized
  ngOnInit(): void {
    // Retrieve all products using the productService and assign them to the products$ observable
    this.products$ = this.productService.getAllProducts();
  }
}
