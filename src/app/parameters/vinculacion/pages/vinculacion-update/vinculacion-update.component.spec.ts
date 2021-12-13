import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionUpdateComponent } from './vinculacion-update.component';

describe('VinculacionUpdateComponent', () => {
  let component: VinculacionUpdateComponent;
  let fixture: ComponentFixture<VinculacionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
