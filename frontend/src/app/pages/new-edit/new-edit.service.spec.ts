import { TestBed } from '@angular/core/testing';

import { NewEditService } from './new-edit.service';

describe('NewEditService', () => {
  let service: NewEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
