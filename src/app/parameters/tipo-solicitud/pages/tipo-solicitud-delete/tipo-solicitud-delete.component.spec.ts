import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSolicitudDeleteComponent } from './tipo-solicitud-delete.component';

describe('TipoSolicitudDeleteComponent', () => {
  let component: TipoSolicitudDeleteComponent;
  let fixture: ComponentFixture<TipoSolicitudDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSolicitudDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSolicitudDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
