import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectByTeacherComponent } from './subject-by-teacher.component';

describe('SubjectByTeacherComponent', () => {
  let component: SubjectByTeacherComponent;
  let fixture: ComponentFixture<SubjectByTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectByTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectByTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
