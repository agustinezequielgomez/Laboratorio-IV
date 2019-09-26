import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {

  constructor(private http: HttpService) { }

  public login(): Observable<string> {
    return this.http.post('http://localhost:80/Programacion-III/TP/Comanda/public/Login/', {nombre: 'admin', pass: 'sysadmin'});
  }
  
  public test(): Observable<string> {
    return this.http.get('http://localhost:80/Programacion-III/TP/Comanda/public/Test/Test');
  }
}
