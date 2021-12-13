import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteCreateComponent } from './proponente-create.component';

describe('ProponenteCreateComponent', () => {
  let component: ProponenteCreateComponent;
  let fixture: ComponentFixture<ProponenteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
