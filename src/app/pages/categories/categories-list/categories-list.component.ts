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

  constructor(public categoryService: Categoryservices){}

  categories$? : Observable<Category[]>;
  
  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
    
    this.categories$.subscribe(categories => {
      
    });
  }
}
