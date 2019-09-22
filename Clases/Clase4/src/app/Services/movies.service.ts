import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpService) { }

  public getMovies(movie: string)
  {
    this.http.get(` https://api.themoviedb.org/3/search/movie?api_key=fdf1c3219a1c96cd94d129253cb41e2f&language=en-US&page=1&include_adult=false`)
  }
}
