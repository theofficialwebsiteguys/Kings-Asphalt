import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardscapingServicesComponent } from './hardscaping-services.component';

describe('HardscapingServicesComponent', () => {
  let component: HardscapingServicesComponent;
  let fixture: ComponentFixture<HardscapingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardscapingServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HardscapingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
