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
  
  categoryId = '';

  updateProductSubscription?: Subscription;

  constructor(
    private productService : Productservices,
    private categoryService : Categoryservices,
    private router: Router,
    private route: ActivatedRoute
  ) {  
    this.model = {
      id : '',
      name: '',
      price: 0,
      imagePath: '',
      description: '',
      stockQuantity: 0,
      categoryName: '',
      rating: 0,
    }
  }
  

ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
  console.log(this.id);
  
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

deleteProduct(): void {
    if(this.id)
    {
      this.productService.deleteProduct(this.id);
    }
  }


}
