import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpService) { }

  getCountriesByName(country: string): Observable<any[]> {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${country}`);
  }

  getCountriesByCapital(capital: string): Observable<any[]>
  {
    return this.http.get(`https://restcountries.eu/rest/v2/capital/${capital}`);
  }
}
