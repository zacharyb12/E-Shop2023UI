import { Component } from '@angular/core';
import { UpdateCategory } from '../models-categories/update-categories.model';
import { Subscription } from 'rxjs';
import { Categoryservices } from '../services-categories/categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent {

  model : UpdateCategory;

  id : string | null = null;

  updateProductSubscription?: Subscription;

  constructor(
    private categoriesService : Categoryservices,
    private router: Router,
    private route: ActivatedRoute
  ) {  
    this.model = {

      name : '',
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.categoriesService.getCategoryById(this.id).subscribe((category) => {
        this.model = category;
      });
    }
  }

  onFormSubmit(): void {
    if (this.model && this.id) {
      this.categoriesService.updateCategory(this.id, this.model).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/categories/categories');
        },
        error: (error) => {
          console.error('Category Update failed:', error);
          
        }
      });
    }
  }

  delete(id : string): void {
    this.categoriesService.deleteCategory(id)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/categories/categories');
      },
      error: (error) => {
        console.error('Category Deleted failed:', error);
        
      }
    });
  }
}
