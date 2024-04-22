// Import necessary Angular modules and dependencies
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

  // Model to store data for updating a category
  model: UpdateCategory;

  // Variable to store the category ID
  id: string | null = null;

  // Subscription to handle updates
  updateProductSubscription?: Subscription;

  // Constructor with injections of Categoryservices, Router, and ActivatedRoute
  constructor(
    private categoriesService: Categoryservices,
    private router: Router,
    private route: ActivatedRoute
  ) {  
    // Initialize the model with default values
    this.model = {
      name: '',
    };
  }

  // Lifecycle hook called after component initialization
  ngOnInit(): void {
    // Get the category ID from the route parameters
    this.id = this.route.snapshot.paramMap.get('id');

    // Fetch category details if ID is available
    if (this.id) {
      this.categoriesService.getCategoryById(this.id).subscribe(
        (category) => {  
          // Update the model with fetched category details
          this.model.name = category.name;
      });
    }
  }

  // Method called when the form is submitted for updating a category
  onFormSubmit(): void {
    // Check if the model and ID are available
    if (this.model && this.id) {
      // Log the category name to the console (for debugging purposes)
      console.log(this.model.name);
      
      // Call the updateCategory method in Categoryservices to update the category
      this.categoriesService.updateCategory(this.id, this.model).subscribe({
        // Handle the response from the service
        next: (response) => {
          // Navigate to the categories page after successfully updating the category
          this.router.navigateByUrl('/categories/categories');
        },
        // Handle errors
        error: (error) => {
          console.error('Category Update failed:', error);
        }
      });
    }
  }

  // Method to delete a category
  delete(id: string): void {
    this.categoriesService.deleteCategory(id).subscribe({
      // Handle the response from the service
      next: (response) => {
        // Navigate to the categories page after successfully deleting the category
        this.router.navigateByUrl('/categories/categories');
      },
      // Handle errors
      error: (error) => {
        console.error('Category Deleted failed:', error);
      }
    });
  }
}
