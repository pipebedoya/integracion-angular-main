import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoReadComponent } from './jurado-read.component';

describe('JuradoReadComponent', () => {
  let component: JuradoReadComponent;
  let fixture: ComponentFixture<JuradoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
