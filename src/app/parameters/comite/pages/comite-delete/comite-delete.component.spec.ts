import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteDeleteComponent } from './comite-delete.component';

describe('ComiteDeleteComponent', () => {
  let component: ComiteDeleteComponent;
  let fixture: ComponentFixture<ComiteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
