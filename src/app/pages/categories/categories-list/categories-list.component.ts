// Import necessary Angular modules and dependencies
import { Component } from '@angular/core';
import { Categoryservices } from '../services-categories/categories.service';
import { Category } from '../models-categories/categories.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {

  // Constructor with injection of Categoryservices
  constructor(public categoryService: Categoryservices){}

  // Observable to hold the list of categories
  categories$?: Observable<Category[]>;
  
  // Lifecycle hook called after component initialization
  ngOnInit(): void {
    // Fetch the list of categories using the category service
    this.categories$ = this.categoryService.getCategories();
    
    // Subscribe to the categories observable (optional)
    this.categories$.subscribe(categories => {
      // Perform any additional logic when categories are received
    });
  }
}
