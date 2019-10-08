import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PeliculasService } from '../../Services/pelicula.service';
import { Pelicula } from 'src/app/Classes/peliculas';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public peliculaBuscada: string;
  @Output() searchResult = new EventEmitter<Pelicula[]>();
  constructor(private peliculaService: PeliculasService) { }

  ngOnInit() {
  }

  searchProduct() {
    if(this.peliculaBuscada !== '')
    {
      this.peliculaService.searchPelicula(this.peliculaBuscada).subscribe((response) => {
        this.searchResult.emit(response);
      });
    }
    else
    {
      this.searchResult.emit([]);
    }
  }

}
