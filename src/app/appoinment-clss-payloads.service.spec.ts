import { TestBed } from '@angular/core/testing';

import { AppoinmentClssPayloadsService } from './appoinment-clss-payloads.service';

describe('AppoinmentClssPayloadsService', () => {
  let service: AppoinmentClssPayloadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppoinmentClssPayloadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
