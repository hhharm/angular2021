import { TestBed } from '@angular/core/testing';

import { IsAdminSavedGuard } from './is-admin-saved.guard';

describe('IsAdminSavedGuard', () => {
  let guard: IsAdminSavedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAdminSavedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
