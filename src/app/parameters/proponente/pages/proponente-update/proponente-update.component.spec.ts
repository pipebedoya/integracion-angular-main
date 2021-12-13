import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteUpdateComponent } from './proponente-update.component';

describe('ProponenteUpdateComponent', () => {
  let component: ProponenteUpdateComponent;
  let fixture: ComponentFixture<ProponenteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
