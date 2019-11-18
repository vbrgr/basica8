import { TestBed } from '@angular/core/testing';

import { CreateReportService } from './create-report.service';

describe('CreateReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateReportService = TestBed.get(CreateReportService);
    expect(service).toBeTruthy();
  });
});
