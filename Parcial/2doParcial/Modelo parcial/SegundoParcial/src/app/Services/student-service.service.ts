import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Subject } from '../Classes/subject';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpService) { }

  inscribirse(idSubject: number) {
    return this.http.post(`${environment.API_URL}/Inscriptions/`, {idSubject: idSubject}).pipe(response => response);
  }

  SubjectsByStudent(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${environment.API_URL}/Inscriptions/SubjectsByStudent`).pipe(response => response);
  }
}
