import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectByStudentComponent } from './subject-by-student.component';

describe('SubjectByStudentComponent', () => {
  let component: SubjectByStudentComponent;
  let fixture: ComponentFixture<SubjectByStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectByStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectByStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
