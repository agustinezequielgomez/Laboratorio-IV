import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpOptions;
  constructor(private http: HttpClient, private headers: HttpHeaders) {
    this.httpOptions = {
      // headers: new HttpHeaders({
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
      //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      // })
    };
   }

  public get(url: string): Observable<any[]> {
    return this.http.get<any[]>(url).pipe(res => res);
  }

  public post(): Observable<any>
  {
    // this.headers.set('Access-Control-Allow-Origin', '*');
    // this.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    // this.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    const httpOptions = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    });
    return this.http.post<any>('http://localhost:80/Programacion-III/TP/Comanda/public/Login/',
    {nombre: 'admin', pass: 'sysadmin'}, {headers: httpOptions}).pipe(res => res);
  }
}
