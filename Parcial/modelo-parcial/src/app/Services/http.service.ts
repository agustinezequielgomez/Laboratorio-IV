import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    const HEADERS = new HttpHeaders();
    HEADERS.set('Access-Control-Allow-Origin', '*');
    return this.http.get(url, {headers: HEADERS}).pipe((response) => response);
  }

  public delete(url: string): Observable<any> {
    const HEADERS = new HttpHeaders();
    HEADERS.set('Access-Control-Allow-Origin', '*');
    console.log(url);
    return this.http.delete(url, {headers: HEADERS}).pipe((response) => response);
  }
}
