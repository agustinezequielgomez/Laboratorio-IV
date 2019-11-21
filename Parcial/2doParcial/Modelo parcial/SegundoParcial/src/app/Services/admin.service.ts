import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { InsertSubjectRequest } from '../Classes/insert-subject-request';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../Classes/user';
import { Subject } from '../Classes/subject';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpService) { }

  insertSubject(request: InsertSubjectRequest) {
    return this.http.post(`${environment.API_URL}/Subject/`, request).pipe(response => response);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API_URL}/Usuario/`).pipe(response => response);
  }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${environment.API_URL}/Subject/`).pipe(response => response);
  }
}
