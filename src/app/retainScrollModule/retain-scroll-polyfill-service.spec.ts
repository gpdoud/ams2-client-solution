import { TestBed, inject } from '@angular/core/testing';

import { RetainScrollPolyfillService } from './retain-scroll-polyfill-service';

describe('RetainScrollPolyfillServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetainScrollPolyfillService]
    });
  });

  it('should be created', inject([RetainScrollPolyfillService], (service: RetainScrollPolyfillService) => {
    expect(service).toBeTruthy();
  }));
});
