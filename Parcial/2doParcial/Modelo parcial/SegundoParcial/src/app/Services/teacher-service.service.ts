import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Subject } from '../Classes/subject';
import { environment } from 'src/environments/environment';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor(private http: HttpService) { }

  StuendtBySubject(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API_URL}/Inscriptions/StudentBySubject`).pipe(response => response);
  }

  SubjectByTeacher(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${environment.API_URL}/Subject/SubjectByTeacher`).pipe(response => response);
  }
}
