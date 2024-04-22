import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewListComponent } from './product-review-list.component';

describe('ProductReviewListComponent', () => {
  let component: ProductReviewListComponent;
  let fixture: ComponentFixture<ProductReviewListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductReviewListComponent]
    });
    fixture = TestBed.createComponent(ProductReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
