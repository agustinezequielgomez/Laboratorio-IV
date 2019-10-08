import { TestBed } from '@angular/core/testing';

import { MiServicioPrincipal } from './miServicioPrincipal.service';

describe('MiServicioPrincipal', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiServicioPrincipal = TestBed.get(MiServicioPrincipal);
    expect(service).toBeTruthy();
  });
});
