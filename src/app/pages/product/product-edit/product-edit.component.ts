// Import necessary Angular modules and dependencies
import { Component } from '@angular/core';
import { Productservices } from '../services-product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateProduct } from '../models-product/update-product.model';
import { Observable, Subscription} from 'rxjs';
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

    this.model = {
      id: '',
      name: '',
      price: 0,
      imagePath: [''],
      description: '',
      stockQuantity: 0,
      categoryName: '',
      rating: 0,
    };
  }

  imagePathInput: string = '';



  // Method triggered when the component is initialized
  ngOnInit(): void {
    // Retrieve the product ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
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
      this.model.imagePath = this.imagePathInput.split(',');
      this.productService.updateProduct(this.id, this.model).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/product/products');
        }
      });
    }
  }

  deleteProduct(): void {
    if (this.id) {
      this.productService.deleteProduct(this.id).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/product/products');
        }
      });
    }
  }
  
  
}
