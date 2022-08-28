import { TestBed } from '@angular/core/testing';

import { ServiceCredService } from './service-cred.service';

describe('ServiceCredService', () => {
  let service: ServiceCredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
