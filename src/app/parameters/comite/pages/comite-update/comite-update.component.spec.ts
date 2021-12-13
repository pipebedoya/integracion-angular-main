import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteUpdateComponent } from './comite-update.component';

describe('ComiteUpdateComponent', () => {
  let component: ComiteUpdateComponent;
  let fixture: ComponentFixture<ComiteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
