import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    const HEADERS = new HttpHeaders();
    HEADERS.set('Access-Control-Allow-Origin', '*');
    HEADERS.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    HEADERS.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    return this.http.get(url, {headers: HEADERS}).pipe(response => response);
  }

  public post(url: string, body: any) {
    const HEADERS = new HttpHeaders();
    HEADERS.set('Access-Control-Allow-Origin', '*');
    HEADERS.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    HEADERS.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    return this.http.post(url, body, {headers: HEADERS}).pipe(response => response);
  }

  public delete(url: string): Observable<any> {
    const HEADERS = new HttpHeaders();
    HEADERS.set('Access-Control-Allow-Origin', '*');
    HEADERS.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    HEADERS.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    return this.http.delete(url, {headers: HEADERS}).pipe(response => response);
  }
}
