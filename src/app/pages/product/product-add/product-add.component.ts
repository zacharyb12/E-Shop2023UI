import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Productservices } from '../services-product/product.service';
import { AddProduct } from '../models-product/add-product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  
  model : AddProduct;

  constructor(
    private productService : Productservices,
    private router : Router
  ) {  
    this.model = {
      name : '',
      price : 0,
      imagePath : '',
      categoryName : '',
      description : '',
      stockQuantity: 0,
      rating : 0,
    }
  }

  onFormSubmit(): void {
    console.log(this.model);
    this.productService.addProduct(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/product/products');
      }
    });
  }

}
