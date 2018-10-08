import { TestBed } from '@angular/core/testing';

import { SpellingStoreService } from './spelling-store.service';

describe('SpellingStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpellingStoreService = TestBed.get(SpellingStoreService);
    expect(service).toBeTruthy();
  });
});
