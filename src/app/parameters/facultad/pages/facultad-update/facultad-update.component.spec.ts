import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadUpdateComponent } from './facultad-update.component';

describe('FacultadUpdateComponent', () => {
  let component: FacultadUpdateComponent;
  let fixture: ComponentFixture<FacultadUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
