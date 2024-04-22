// Import necessary Angular modules and dependencies
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
  
  // Model to hold the data for adding a new product
  model: AddProduct;

  // Constructor with ProductService and Router injection
  constructor(
    private productService: Productservices,
    private router: Router
  ) {  
    // Initialize the model with default values
    this.model = {
      name: '',
      price: 0,
      imagePath: '',
      categoryName: '',
      description: '',
      stockQuantity: 0,
      rating: 0,
    };
  }

  // Method triggered when the form is submitted
  onFormSubmit(): void {
    // Log the model data for verification
    console.log(this.model);
    
    // Call the ProductService to add the new product
    this.productService.addProduct(this.model)
      .subscribe({
        // Navigate to the product list page upon successful addition
        next: (response) => {
          this.router.navigateByUrl('/product/products');
        }
      });
  }

}
