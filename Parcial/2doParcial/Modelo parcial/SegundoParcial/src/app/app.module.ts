import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatIconModule,
         MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
         MatRippleModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
         MatToolbarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { AccessScreenComponent } from './Components/access-screen/access-screen.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_LANGUAGE, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { SnackBarTemplateComponent } from './Components/snack-bar-template/snack-bar-template.component';
import { RolePipe } from './Pipes/role.pipe';
import { HeaderComponent } from './Components/header/header.component';
import { CardComponent } from './Components/card/card.component';
import { HomeComponent } from './Components/home/home.component';
import { TableComponent } from './Components/table/table.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { InterceptorService } from './Services/interceptor.service';
import { SubjectByStudentComponent } from './Components/subject-by-student/subject-by-student.component';
import { PaginatorDirective } from './Directives/paginator.directive';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { UsersComponent } from './Components/users/users.component';
import { InscriptComponent } from './Components/inscript/inscript.component';
import { CuposDirective } from './Directives/cupos.directive';
import { StudentBySubjectComponent } from './Components/student-by-subject/student-by-subject.component';
import { SubjectByTeacherComponent } from './Components/subject-by-teacher/subject-by-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessScreenComponent,
    LoginComponent,
    RegisterComponent,
    FileUploadComponent,
    SnackBarTemplateComponent,
    RolePipe,
    HeaderComponent,
    CardComponent,
    HomeComponent,
    TableComponent,
    SubjectByStudentComponent,
    PaginatorDirective,
    SubjectsComponent,
    UsersComponent,
    InscriptComponent,
    CuposDirective,
    StudentBySubjectComponent,
    SubjectByTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    RecaptchaModule,
    NgxSkeletonLoaderModule
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
    {provide: RECAPTCHA_SETTINGS, useValue: {siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    theme: 'light', size: 'normal', type: 'image', badge: 'inline'} as RecaptchaSettings},
    {provide: RECAPTCHA_LANGUAGE, useValue: 'es'},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarTemplateComponent, InscriptComponent]
})
export class AppModule { }
