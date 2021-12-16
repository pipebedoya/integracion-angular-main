import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirRespuestaComponent } from './recibir-respuesta.component';

describe('RecibirRespuestaComponent', () => {
  let component: RecibirRespuestaComponent;
  let fixture: ComponentFixture<RecibirRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibirRespuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibirRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
