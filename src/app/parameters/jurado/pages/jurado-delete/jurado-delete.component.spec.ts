import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoDeleteComponent } from './jurado-delete.component';

describe('JuradoDeleteComponent', () => {
  let component: JuradoDeleteComponent;
  let fixture: ComponentFixture<JuradoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
