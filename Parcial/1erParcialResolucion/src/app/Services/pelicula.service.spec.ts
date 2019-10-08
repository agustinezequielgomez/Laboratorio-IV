import { TestBed } from '@angular/core/testing';

import { PeliculasService } from './pelicula.service';

describe('PeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculasService = TestBed.get(PeliculasService);
    expect(service).toBeTruthy();
  });
});
