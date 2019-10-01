import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Producto } from '../Classes/producto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private endpoint = 'Productos/';
  constructor(private http: HttpService) { }

  getProducts(): Observable<Producto[]> {
    const URL = `${environment.API_PATH}${this.endpoint}`;
    return this.http.get(URL);
  }

  deleteProduct(id: number): Observable<string> {
    const URL = `${environment.API_PATH}${this.endpoint}${id}`;
    return this.http.delete(URL);
  }
}
