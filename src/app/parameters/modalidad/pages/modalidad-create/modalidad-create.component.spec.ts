import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadCreateComponent } from './modalidad-create.component';

describe('ModalidadCreateComponent', () => {
  let component: ModalidadCreateComponent;
  let fixture: ComponentFixture<ModalidadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
