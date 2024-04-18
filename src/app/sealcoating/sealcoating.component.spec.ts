import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SealcoatingComponent } from './sealcoating.component';

describe('SealcoatingComponent', () => {
  let component: SealcoatingComponent;
  let fixture: ComponentFixture<SealcoatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SealcoatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SealcoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
