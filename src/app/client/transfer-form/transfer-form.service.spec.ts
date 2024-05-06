import { TestBed } from '@angular/core/testing';

import { TransferFormService } from './transfer-form.service';

describe('TransferFormService', () => {
  let service: TransferFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
