import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { InscriptComponent } from '../Components/inscript/inscript.component';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private router: Router, private dialog: MatDialog) { }

  private alumnoCards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[] = [
    {title: 'Inscripciones', subtitle: 'Inscribite a una materia', imgPath: '../../assets/img/145.jpg', callback: () => this.openDialog()},
    {title: 'Materias', subtitle: 'Ver materias que cursas', imgPath: '../../assets/img/145.jpg', callback: () => this.redirect('SubjectByStudent')}
  ];

  private teacherCards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[] = [
    {title: 'Materias', subtitle: 'Ver materias a cargo', imgPath: '../../assets/img/145.jpg', callback: () => this.redirect('SubjectByTeacher')},
    {title: 'Alumnos', subtitle: 'Ver alumnos que cursan tus materias', imgPath: '../../assets/img/145.jpg', callback: () => this.redirect('StudentBySubject')}
  ];

  private adminCards: {title: string, subtitle: string, imgPath: string, callback: CallableFunction}[] = [
    {title: 'Usuarios', subtitle: 'Ver listado de usuarios', imgPath: '../../assets/img/145.jpg', callback: () => this.redirect('Users')},
    {title: 'Materias', subtitle: 'Ver listado de materias', imgPath: '../../assets/img/145.jpg', callback: () => this.redirect('Subjects')},
    {title: 'Materias', subtitle: 'Dar de alta una materia', imgPath: '../../assets/img/145.jpg', callback: () => this.redirect('Subjects')}
  ];

  public get StudentCards() {
    return this.alumnoCards;
  }

  public get TeacherCards() {
    return this.teacherCards;
  }

  public get AdminCards() {
    return this.adminCards;
  }

  redirect(screen: string) {
    console.log(screen);
    this.router.navigate([`${screen}`]);
  }

  openDialog() {
    const CONFIG = new MatDialogConfig();
    CONFIG.hasBackdrop = true;
    CONFIG.height = '30%';
    CONFIG.width = '70%';
    CONFIG.panelClass = 'inscriptionDialog';
    this.dialog.open(InscriptComponent, CONFIG);
  }
}
