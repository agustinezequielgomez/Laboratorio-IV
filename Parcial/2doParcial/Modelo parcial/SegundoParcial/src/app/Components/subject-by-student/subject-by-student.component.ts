import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../Services/student-service.service';
import { Subject } from 'src/app/Classes/subject';

@Component({
  selector: 'app-subject-by-student',
  templateUrl: './subject-by-student.component.html',
  styleUrls: ['./subject-by-student.component.scss']
})
export class SubjectByStudentComponent implements OnInit {

  public subjects: Subject[];
  public columns: string[];
  constructor(private student: StudentServiceService) { }

  ngOnInit() {
    this.student.SubjectsByStudent().subscribe((response) =>  {
      this.subjects = response;
      this.columns = Object.keys(response[0]);
    });
  }

}
