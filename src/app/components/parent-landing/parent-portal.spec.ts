import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPortal } from './parent-landing';

describe('ParentPortal', () => {
  let component: ParentPortal;
  let fixture: ComponentFixture<ParentPortal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentPortal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentPortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
