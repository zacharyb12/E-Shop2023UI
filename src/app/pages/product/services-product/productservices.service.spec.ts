import { TestBed } from '@angular/core/testing';
import { Productservices } from './product.service';


describe('ProductservicesService', () => {
  let service: Productservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
