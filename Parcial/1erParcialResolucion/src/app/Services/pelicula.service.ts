import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MiServicioPrincipal } from './miServicioPrincipal.service';
import { Observable, throwError } from 'rxjs';
import { Pelicula } from '../Classes/peliculas';
import { retry, catchError } from 'rxjs/operators';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: MiServicioPrincipal) { }

  getAllPeliculas(): Observable<Pelicula[]> {
    return this.http.get(`${environment.API_URL}/`).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  deletePelicula(id: number): Observable<any> {
    const URL = (`${environment.API_URL}/${id}`);
    return this.http.delete(URL).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  searchPelicula(productName: string): Observable<Pelicula[]> {
    const URL = (`${environment.API_URL}/description/${productName}`);
    return this.http.get(URL).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  createPelicula(product: Pelicula): Observable<any> {
    const URL = (`${environment.API_URL}/`);
    return this.http.post(URL, product).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
