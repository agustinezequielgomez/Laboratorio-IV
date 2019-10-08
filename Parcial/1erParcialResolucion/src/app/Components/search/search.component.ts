import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Classes/peliculas';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchResults: Pelicula[];
  constructor() { }

  ngOnInit() {
  }

  getSearchResult($event) {
    if($event === 'No se encontro el producto que se esta buscando')
    {
      this.searchResults = [];
    }
    else
    {
      this.searchResults = $event;
    }
  }
}
