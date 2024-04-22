import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralImageComponent } from './lateral-image.component';

describe('LateralImageComponent', () => {
  let component: LateralImageComponent;
  let fixture: ComponentFixture<LateralImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LateralImageComponent]
    });
    fixture = TestBed.createComponent(LateralImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
