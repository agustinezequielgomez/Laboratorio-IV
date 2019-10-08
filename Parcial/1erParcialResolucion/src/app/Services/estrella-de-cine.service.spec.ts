import { TestBed } from '@angular/core/testing';

import { EstrellaDeCineService } from './estrella-de-cine.service';

describe('EstrellaDeCineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstrellaDeCineService = TestBed.get(EstrellaDeCineService);
    expect(service).toBeTruthy();
  });
});
