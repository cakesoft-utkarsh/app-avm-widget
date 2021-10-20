import { TestBed } from '@angular/core/testing';

import { ShoppropAVMService } from './shopprop-avm.service';

describe('ShoppropAVMService', () => {
  let service: ShoppropAVMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppropAVMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
