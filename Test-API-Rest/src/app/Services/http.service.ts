import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private headers: HttpHeaders;
  constructor(private http: HttpClient/*, private headers: HttpHeaders*/) {
    // this.headers = new HttpHeaders();
    // this.headers.set('Access-Control-Allow-Origin', '*');
    // this.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    // this.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  }

  public get(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      retry(1),
      catchError(err => throwError(err))
    );
  }

  public post(url: string, body: any): Observable<any> {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    return this.http.post(url, JSON.stringify(body), {headers: this.headers}).pipe(
      retry(1),
      catchError(err =>  throwError(err))
    );
  }
}
