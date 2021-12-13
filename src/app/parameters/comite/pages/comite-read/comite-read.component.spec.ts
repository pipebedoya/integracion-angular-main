import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteReadComponent } from './comite-read.component';

describe('ComiteReadComponent', () => {
  let component: ComiteReadComponent;
  let fixture: ComponentFixture<ComiteReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
