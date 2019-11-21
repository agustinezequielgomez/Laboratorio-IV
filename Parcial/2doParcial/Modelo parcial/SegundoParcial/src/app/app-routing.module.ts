import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessScreenComponent } from './Components/access-screen/access-screen.component';
import { HomeComponent } from './Components/home/home.component';
import { TableComponent } from './Components/table/table.component';
import { SubjectByStudentComponent } from './Components/subject-by-student/subject-by-student.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { UsersComponent } from './Components/users/users.component';
import { StudentBySubjectComponent } from './Components/student-by-subject/student-by-subject.component';
import { SubjectByTeacherComponent } from './Components/subject-by-teacher/subject-by-teacher.component';
import { AuthGuardService } from './Services/auth-guard.service';


const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'Access'},
{path: 'Access', component: AccessScreenComponent},
{path: 'SubjectByStudent', component: SubjectByStudentComponent, data: {animation: 'RightSide'}, canActivate: [AuthGuardService]},
{path: 'StudentBySubject', component: StudentBySubjectComponent, data: {animation: 'RightSide'}, canActivate: [AuthGuardService]},
{path: 'SubjectByTeacher', component: SubjectByTeacherComponent, data: {animation: 'RightSide'}, canActivate: [AuthGuardService]},
{path: 'Subjects', component: SubjectsComponent, data: {animation: 'RightSide'}, canActivate: [AuthGuardService]},
{path: 'Users', component: UsersComponent, data: {animation: 'RightSide'}, canActivate: [AuthGuardService]},
{path: 'Home', component: HomeComponent, data: {animation: 'LeftSide'}, canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
