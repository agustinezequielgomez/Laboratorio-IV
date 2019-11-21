import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/Classes/subject';
import { TeacherServiceService } from '../../Services/teacher-service.service';

@Component({
  selector: 'app-subject-by-teacher',
  templateUrl: './subject-by-teacher.component.html',
  styleUrls: ['./subject-by-teacher.component.scss']
})
export class SubjectByTeacherComponent implements OnInit {

  public subjects: Subject[];
  public columns: string[];
  constructor(private teacher: TeacherServiceService) { }

  ngOnInit() {
    this.teacher.SubjectByTeacher().subscribe((response) => {
      this.subjects = response;
      this.columns = Object.keys(response[0]);
    });
  }

}
