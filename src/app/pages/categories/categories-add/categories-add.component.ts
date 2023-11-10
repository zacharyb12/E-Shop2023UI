import { Component } from '@angular/core';
import { Categoryservices } from '../services-categories/categories.service';
import { Router } from '@angular/router';
import { AddCategory } from '../models-categories/add-categories.model';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent {


  model : AddCategory;

  constructor(
    private categoriesService : Categoryservices,
    private router : Router
  ) {  
    this.model = {
      name : '',

    }
  }

  onFormSubmit(): void {
    console.log(this.model);
    this.categoriesService.addProduct(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/categories/categories');
      }
    });
  }
}
