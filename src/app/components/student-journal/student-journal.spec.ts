import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentJournal } from './student-journal';

describe('StudentJournal', () => {
  let component: StudentJournal;
  let fixture: ComponentFixture<StudentJournal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentJournal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentJournal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
