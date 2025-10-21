import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychiatristPortal } from './psychiatrist-portal';

describe('PsychiatristPortal', () => {
  let component: PsychiatristPortal;
  let fixture: ComponentFixture<PsychiatristPortal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsychiatristPortal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychiatristPortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
