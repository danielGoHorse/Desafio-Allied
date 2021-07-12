import { TestBed } from '@angular/core/testing';

import { ApiAlliedService } from './api-allied.service';

describe('ApiAlliedService', () => {
  let service: ApiAlliedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAlliedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
