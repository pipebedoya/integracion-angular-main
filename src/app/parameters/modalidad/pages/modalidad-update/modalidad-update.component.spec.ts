import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadUpdateComponent } from './modalidad-update.component';

describe('ModalidadUpdateComponent', () => {
  let component: ModalidadUpdateComponent;
  let fixture: ComponentFixture<ModalidadUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
