import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadDeleteComponent } from './modalidad-delete.component';

describe('ModalidadDeleteComponent', () => {
  let component: ModalidadDeleteComponent;
  let fixture: ComponentFixture<ModalidadDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
