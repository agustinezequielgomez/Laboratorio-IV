import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private http: HttpService) { }

  getEmployees(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API_URL}/Usuario/?login=true`);
  }

  login(userName: string, password: string): Observable<string> {
    return this.http.post(`${environment.API_URL}/Login/`, {email: userName, password: password});
  }

  register(request: FormData) {
    return this.http.post(`${environment.API_URL}/Register/`, request);
  }
}
