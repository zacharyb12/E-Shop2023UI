// Import necessary Angular modules and dependencies
import { Component } from '@angular/core';
import { Productservices } from '../services-product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateProduct } from '../models-product/update-product.model';
import { Observable, Subscription, observable } from 'rxjs';
import { Categoryservices } from '../../categories/services-categories/categories.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  // Variable to hold the product details for editing
  model: UpdateProduct;

  // Variable to store the product ID from the route
  id: string | null = null;

  // Variable to store the category ID
  categoryId = '';

  // Subscription to handle product updates
  updateProductSubscription?: Subscription;

  // Constructor with necessary service injections
  constructor(
    private productService: Productservices,
    private categoryService: Categoryservices,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Initialize the model with default values
    this.model = {
      id: '',
      name: '',
      price: 0,
      imagePath: '',
      description: '',
      stockQuantity: 0,
      categoryName: '',
      rating: 0,
    };
  }

  // Method triggered when the component is initialized
  ngOnInit(): void {
    // Retrieve the product ID from the route
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      // Retrieve product details by ID
      this.productService.getProductById(this.id).subscribe((product) => {
        this.model = product;
      });
    }
  }

  // Method to submit the updated product details
  onFormSubmit(): void {
    if (this.id) {
      this.productService.updateProduct(this.id, this.model).subscribe({
        next: (response) => {
          // Navigate back to the product list page after successful update
          this.router.navigateByUrl('/product/products');
        }
      });
    }
  }

  // Method to delete the current product
  deleteProduct(): void {
    if (this.id) {
      this.productService.deleteProduct(this.id);
    }
  }
}
