import { TestBed } from '@angular/core/testing';

import { AppAvmWidgetService } from './app-avm-widget.service';

describe('AppAvmWidgetService', () => {
  let service: AppAvmWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAvmWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
