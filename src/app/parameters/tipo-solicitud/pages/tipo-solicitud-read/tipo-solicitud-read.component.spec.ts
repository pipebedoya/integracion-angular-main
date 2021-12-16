import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSolicitudReadComponent } from './tipo-solicitud-read.component';

describe('TipoSolicitudReadComponent', () => {
  let component: TipoSolicitudReadComponent;
  let fixture: ComponentFixture<TipoSolicitudReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSolicitudReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSolicitudReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
