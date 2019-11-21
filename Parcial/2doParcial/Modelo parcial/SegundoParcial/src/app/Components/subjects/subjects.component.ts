import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/admin.service';
import { Subject } from 'src/app/Classes/subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  public subjects: Subject[];
  public columns: string[];
  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.admin.getSubjects().subscribe((response) => {
      this.subjects = response;
      this.columns = Object.keys(response[0]);
    });
  }

}
