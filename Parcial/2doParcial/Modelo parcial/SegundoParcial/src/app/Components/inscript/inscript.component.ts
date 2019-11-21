import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Subject } from 'src/app/Classes/subject';
import { AdminService } from '../../Services/admin.service';
import { isNull } from 'util';
import { StudentServiceService } from '../../Services/student-service.service';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';

@Component({
  selector: 'app-inscript',
  templateUrl: './inscript.component.html',
  styleUrls: ['./inscript.component.scss']
})
export class InscriptComponent implements OnInit {

  public subjects: Subject[];
  public selectedSubject: Subject = null;
  constructor(public dialogRef: MatDialogRef<InscriptComponent>, private admin: AdminService, private student: StudentServiceService,
              private snack: DisplaySnackBarService) { }

  ngOnInit() {
    this.admin.getSubjects().subscribe((response) => {
      this.subjects = response;
    });
  }

  disableButton() {
    return isNull(this.selectedSubject);
  }

  inscript() {
    this.student.inscribirse(this.selectedSubject.id).subscribe((response) => {
      this.snack.openSnackBar(response, 'success', 3);
    }, (err) => {
      this.snack.openSnackBar('No podes inscribirte mas de una vez a la misma materia', 'error', 1);
    });
  }
}
