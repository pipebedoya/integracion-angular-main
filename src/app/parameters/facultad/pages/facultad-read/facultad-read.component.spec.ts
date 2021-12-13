import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadReadComponent } from './facultad-read.component';

describe('FacultadReadComponent', () => {
  let component: FacultadReadComponent;
  let fixture: ComponentFixture<FacultadReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
