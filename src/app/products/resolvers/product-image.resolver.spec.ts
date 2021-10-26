import { TestBed } from '@angular/core/testing';

import { ProductImageResolver } from './product-image.resolver';

describe('ProductImageResolver', () => {
  let resolver: ProductImageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductImageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
