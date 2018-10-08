import { TestBed } from '@angular/core/testing';

import { WordDefinitionService } from './word-definition-service.service';

describe('WordDefinitionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordDefinitionService = TestBed.get(WordDefinitionService);
    expect(service).toBeTruthy();
  });
});
