import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpService } from './http.service';
import { Observable, throwError } from 'rxjs';
import { Productos } from '../Classes/productos';
import { retry, catchError } from 'rxjs/operators';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpService) { }

  getAllProducts(): Observable<Productos[]> {
    return this.http.get(`${environment.API_URL}/`).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  deleteProduct(id: number): Observable<any> {
    const URL = (`${environment.API_URL}/${id}`);
    return this.http.delete(URL).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  searchProduct(productName: string): Observable<Productos[]> {
    const URL = (`${environment.API_URL}/description/${productName}`);
    return this.http.get(URL).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  createProduct(product: Productos): Observable<any> {
    const URL = (`${environment.API_URL}/`);
    return this.http.post(URL, product).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
