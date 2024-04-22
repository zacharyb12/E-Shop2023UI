// Import necessary Angular modules and dependencies
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

  // Model to store data for adding a category
  model: AddCategory;

  // Constructor with injections of Categoryservices and Router
  constructor(
    private categoriesService: Categoryservices,
    private router: Router
  ) {  
    // Initialize the model with default values
    this.model = {
      name: '',
    };
  }

  // Method called when the form is submitted
  onFormSubmit(): void {
    // Log the model data to the console (for debugging purposes)
    console.log(this.model);

    // Call the addCategory method in Categoryservices to add the category
    this.categoriesService.addCategory(this.model)
      .subscribe({
        // Handle the response from the service
        next: (response) => {
          // Navigate to the categories page after successfully adding a category
          this.router.navigateByUrl('/categories/categories');
        }
      });
  }
}
