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

  model : UpdateProduct;

  id : string | null = null;

  updateProductSubscription?: Subscription;

  constructor(
    private productService : Productservices,
    private categoryService : Categoryservices,
    private router: Router,
    private route: ActivatedRoute
  ) {  
    this.model = {
      name: '',
      price: 0,
      imagePath: '',
      description: '',
      stockQuantity: 0,
      rating: 0,
      categoryName: '',

    }
  }
  

  ngOnInit(): void {
    console.log(this.model.categoryName);
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProductById(this.id).subscribe((product) => {
        this.model = product;

      });
    }
  }

  onFormSubmit(): void {
    if(this.id)
    {

      this.productService.updateProduct(this.id, this.model).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/product/products');
        }
      });
    }
    }
    
  updateProductName()
  {

  }

  updateProductPrice()
  {

  }

  updateProductDescription()
  {

  }


  deleteProduct(): void {
    if(this.id)
    {
      this.productService.deleteProduct(this.id);
    }
  }


}
