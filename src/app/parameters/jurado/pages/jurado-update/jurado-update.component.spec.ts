import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoUpdateComponent } from './jurado-update.component';

describe('JuradoUpdateComponent', () => {
  let component: JuradoUpdateComponent;
  let fixture: ComponentFixture<JuradoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
