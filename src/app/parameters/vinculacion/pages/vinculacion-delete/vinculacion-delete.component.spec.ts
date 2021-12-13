import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionDeleteComponent } from './vinculacion-delete.component';

describe('VinculacionDeleteComponent', () => {
  let component: VinculacionDeleteComponent;
  let fixture: ComponentFixture<VinculacionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
