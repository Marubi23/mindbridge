import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychiatristDashboard } from './psychiatrist-dashboard';

describe('PsychiatristDashboard', () => {
  let component: PsychiatristDashboard;
  let fixture: ComponentFixture<PsychiatristDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsychiatristDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychiatristDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
