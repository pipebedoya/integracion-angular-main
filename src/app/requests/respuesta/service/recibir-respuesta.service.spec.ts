import { TestBed } from '@angular/core/testing';

import { RecibirRespuestaService } from './recibir-respuesta.service';

describe('RecibirRespuestaService', () => {
  let service: RecibirRespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecibirRespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
