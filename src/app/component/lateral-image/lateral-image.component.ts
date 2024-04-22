// Import necessary Angular modules and dependencies
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/pages/product/models-product/product.model';
import { Productservices } from 'src/app/pages/product/services-product/product.service';

@Component({
  selector: 'app-lateral-image',
  templateUrl: './lateral-image.component.html',
  styleUrls: ['./lateral-image.component.css']
})
export class LateralImageComponent {

  // Observable to hold the list of products
  products$?: Observable<Product[]>;

  // Constructor with Productservices injection
  constructor(public productService: Productservices)
  {
    // Initialize the products$ observable with the list of all products
    this.products$ = this.productService.getAllProducts();
  }

  // Lifecycle hook called after component initialization
  ngOnInit(): void {
    // Any additional initialization logic can be placed here
  }
}
