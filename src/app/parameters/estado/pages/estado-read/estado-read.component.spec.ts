import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoReadComponent } from './estado-read.component';

describe('EstadoReadComponent', () => {
  let component: EstadoReadComponent;
  let fixture: ComponentFixture<EstadoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
