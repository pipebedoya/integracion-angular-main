import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionCreateComponent } from './vinculacion-create.component';

describe('VinculacionCreateComponent', () => {
  let component: VinculacionCreateComponent;
  let fixture: ComponentFixture<VinculacionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
