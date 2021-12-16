import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSolicitudCreateComponent } from './tipo-solicitud-create.component';

describe('TipoSolicitudCreateComponent', () => {
  let component: TipoSolicitudCreateComponent;
  let fixture: ComponentFixture<TipoSolicitudCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSolicitudCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSolicitudCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
