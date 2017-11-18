import { TestBed, inject } from '@angular/core/testing';

import { ClarityDesignDataServiceService } from './clarity-design-data-service.service';

describe('ClarityDesignDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClarityDesignDataServiceService]
    });
  });

  it('should be created', inject([ClarityDesignDataServiceService], (service: ClarityDesignDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
