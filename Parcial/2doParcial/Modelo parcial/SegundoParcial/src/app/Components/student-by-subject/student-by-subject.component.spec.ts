import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBySubjectComponent } from './student-by-subject.component';

describe('StudentBySubjectComponent', () => {
  let component: StudentBySubjectComponent;
  let fixture: ComponentFixture<StudentBySubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBySubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
