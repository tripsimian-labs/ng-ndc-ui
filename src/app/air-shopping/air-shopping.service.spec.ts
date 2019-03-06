import { TestBed } from '@angular/core/testing';

import { AirShoppingService } from './air-shopping.service';

describe('AirShoppingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirShoppingService = TestBed.get(AirShoppingService);
    expect(service).toBeTruthy();
  });
});
