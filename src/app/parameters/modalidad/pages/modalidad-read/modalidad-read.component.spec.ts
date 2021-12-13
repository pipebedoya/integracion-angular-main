import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadReadComponent } from './modalidad-read.component';

describe('ModalidadReadComponent', () => {
  let component: ModalidadReadComponent;
  let fixture: ComponentFixture<ModalidadReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
