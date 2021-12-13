import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoCreateComponent } from './jurado-create.component';

describe('JuradoCreateComponent', () => {
  let component: JuradoCreateComponent;
  let fixture: ComponentFixture<JuradoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
