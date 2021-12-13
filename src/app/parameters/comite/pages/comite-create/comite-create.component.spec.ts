import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteCreateComponent } from './comite-create.component';

describe('ComiteCreateComponent', () => {
  let component: ComiteCreateComponent;
  let fixture: ComponentFixture<ComiteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
