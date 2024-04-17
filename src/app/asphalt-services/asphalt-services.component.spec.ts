import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsphaltServicesComponent } from './asphalt-services.component';

describe('AsphaltServicesComponent', () => {
  let component: AsphaltServicesComponent;
  let fixture: ComponentFixture<AsphaltServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsphaltServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsphaltServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
