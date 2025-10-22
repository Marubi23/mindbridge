import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLandingComponent } from './professional-landing';

describe('PsychiatristPortal', () => {
  let component: ProfessionalLandingComponent;
  let fixture: ComponentFixture<ProfessionalLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
