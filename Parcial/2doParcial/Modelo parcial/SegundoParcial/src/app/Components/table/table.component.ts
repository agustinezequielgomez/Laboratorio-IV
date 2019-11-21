import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { interval } from 'rxjs';
import { isUndefined } from 'util';
import { ExpandForm } from '../../Animations/animation';
import { InsertSubjectRequest } from '../../Classes/insert-subject-request';
import { User, UserRoles } from '../../Classes/user';
import { AdminService } from '../../Services/admin.service';
import { DisplaySnackBarService } from '../../Services/display-snack-bar.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [ExpandForm]
})
export class TableComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @Input() displayedColumns: string[];
  @Input() data: any;
  @Input() adminTemplate = false;
  public showSkeleton = true;

  public dataSource: MatTableDataSource<any>;
  public addSubjectForm: FormGroup;
  public showAddSubjectForm = false;
  public teachers: User[];
  constructor(private admin: AdminService, private snack: DisplaySnackBarService, public domSanitzaion: DomSanitizer) { }

  ngOnInit() {
    const SUBSCRIPTION = interval(100).subscribe(() => {
      if (!isUndefined(this.data)) {
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.showSkeleton = false;
        SUBSCRIPTION.unsubscribe();
      }
    });

    if (this.adminTemplate) {
      this.admin.getUsers().subscribe((users) => {
        this.teachers = users.filter(user => user.type === UserRoles.Profesor);
      });
      this.addSubjectForm = new FormGroup({
        nombre: new FormControl('', Validators.required),
        cuatrimestre: new FormControl('', [Validators.required, this.NumericValue]),
        cupos: new FormControl('', [Validators.required, this.NumericValue]),
        profesor: new FormControl('', Validators.required)
      });
    }
  }

  NumericValue(control: AbstractControl) {
    if (!isNaN(control.value)) {
      return null;
    }
    return { NumericValue: true };
  }

  filterTable(filterString: string) {
    this.dataSource.filter = filterString;
  }

  insertSubject() {
    const REQUEST: InsertSubjectRequest = {
      nombre: this.addSubjectForm.controls.nombre.value,
      cuatrimestre: this.addSubjectForm.controls.cuatrimestre.value,
      cupos: this.addSubjectForm.controls.cupos.value,
      idProfesor: this.addSubjectForm.controls.profesor.value
    };
    this.admin.insertSubject(REQUEST).subscribe((response) => {
      this.admin.getSubjects().subscribe((subjects) => {
        this.dataSource.data = subjects;
      });
      this.snack.openSnackBar(response, 'success', 3);
    });
  }
}
