import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewEditComponent } from './product-review-edit.component';

describe('ProductReviewEditComponent', () => {
  let component: ProductReviewEditComponent;
  let fixture: ComponentFixture<ProductReviewEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductReviewEditComponent]
    });
    fixture = TestBed.createComponent(ProductReviewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
