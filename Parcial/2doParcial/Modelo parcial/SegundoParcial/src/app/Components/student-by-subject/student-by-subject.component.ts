import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../../Services/teacher-service.service';
import { User } from 'src/app/Classes/user';

@Component({
  selector: 'app-student-by-subject',
  templateUrl: './student-by-subject.component.html',
  styleUrls: ['./student-by-subject.component.scss']
})
export class StudentBySubjectComponent implements OnInit {

  public students: User[];
  public columns: string[];
  constructor(private teacher: TeacherServiceService) { }

  ngOnInit() {
    this.teacher.StuendtBySubject().subscribe((response) => {
      this.students = response;
      this.columns = Object.keys(response[0]);
    });
  }

}
