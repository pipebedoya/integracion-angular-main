import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSolicitudUpdateComponent } from './tipo-solicitud-update.component';

describe('TipoSolicitudUpdateComponent', () => {
  let component: TipoSolicitudUpdateComponent;
  let fixture: ComponentFixture<TipoSolicitudUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSolicitudUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSolicitudUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
