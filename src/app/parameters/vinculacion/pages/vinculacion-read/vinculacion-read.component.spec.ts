import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionReadComponent } from './vinculacion-read.component';

describe('VinculacionReadComponent', () => {
  let component: VinculacionReadComponent;
  let fixture: ComponentFixture<VinculacionReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
