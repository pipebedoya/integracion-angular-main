import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteReadComponent } from './proponente-read.component';

describe('ProponenteReadComponent', () => {
  let component: ProponenteReadComponent;
  let fixture: ComponentFixture<ProponenteReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
