import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/Classes/productos';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchResults: Productos[];
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
