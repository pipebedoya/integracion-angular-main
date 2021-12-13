import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteDeleteComponent } from './proponente-delete.component';

describe('ProponenteDeleteComponent', () => {
  let component: ProponenteDeleteComponent;
  let fixture: ComponentFixture<ProponenteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
