import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadDeleteComponent } from './facultad-delete.component';

describe('FacultadDeleteComponent', () => {
  let component: FacultadDeleteComponent;
  let fixture: ComponentFixture<FacultadDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
