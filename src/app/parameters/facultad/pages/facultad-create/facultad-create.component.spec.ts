import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadCreateComponent } from './facultad-create.component';

describe('FacultadCreateComponent', () => {
  let component: FacultadCreateComponent;
  let fixture: ComponentFixture<FacultadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
