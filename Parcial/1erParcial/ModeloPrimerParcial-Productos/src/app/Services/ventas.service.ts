import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Ventas } from '../Classes/ventas';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpService) { }

  createVenta(venta: Ventas): Observable<any> {
    const URL = (`${environment.API_VENTAS}/`);
    return this.http.post(URL, venta).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getAllVentas(): Observable<Ventas[]> {
    const URL = (`${environment.API_VENTAS}/`);
    return this.http.get(URL).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
