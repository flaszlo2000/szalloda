import { TestBed } from '@angular/core/testing';

import { SzobatipusService } from './szobatipus.service';

describe('SzobatipusService', () => {
  let service: SzobatipusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SzobatipusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
