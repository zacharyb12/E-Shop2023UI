import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsForUserComponent } from './product-details-for-user.component';

describe('ProductDetailsForUserComponent', () => {
  let component: ProductDetailsForUserComponent;
  let fixture: ComponentFixture<ProductDetailsForUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsForUserComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
