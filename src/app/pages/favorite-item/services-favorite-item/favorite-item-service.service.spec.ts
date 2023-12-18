import { TestBed } from '@angular/core/testing';

import { FavoriteItemService } from './favorite-item-service.service';

describe('FavoriteItemServiceService', () => {
  let service: FavoriteItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
