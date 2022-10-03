import { TestBed } from '@angular/core/testing';

import { GcdsComponentsService } from './gcds-components.service';

describe('GcdsComponentsService', () => {
  let service: GcdsComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcdsComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
