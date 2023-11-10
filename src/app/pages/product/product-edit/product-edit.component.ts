import { Component } from '@angular/core';
import { Productservices } from '../services-product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateProduct } from '../models-product/update-product.model';
import { Subscription } from 'rxjs';

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
    private router: Router,
    private route: ActivatedRoute
  ) {  
    this.model = {
      name : '',
      price : 0,
      imagePath : '',
      categoryId : '',
      description : '',

    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProductById(this.id).subscribe((product) => {
        this.model = product;
      });
    }
  }

  onFormSubmit(): void {
    if (this.model && this.id) {
      this.productService.updateProduct(this.id, this.model).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/product/products');
        },
        error: (error) => {
          console.error('Update product failed:', error);
          // Gérer l'erreur ici (par exemple, afficher un message à l'utilisateur)
        }
      });
    }
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe({
      
    })
  }


}
