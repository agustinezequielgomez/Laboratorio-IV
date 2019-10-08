import { Injectable } from '@angular/core';
import { MiServicioPrincipal } from './miServicioPrincipal.service';
import { Ventas } from '../Classes/ventas';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { EstrellaDeCine } from '../Classes/estrella-de-cine';

@Injectable({
  providedIn: 'root'
})
export class EstrellaDeCineService {

  constructor(private http: MiServicioPrincipal) { }

  createVenta(venta: EstrellaDeCine): Observable<any> {
    const URL = (`${environment.API_ESTRELLAS}/`);
    return this.http.post(URL, venta).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getAllEstrellas(): Observable<EstrellaDeCine[]> {
    const URL = (`${environment.API_ESTRELLAS}/`);
    return this.http.get(URL).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
