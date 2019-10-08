import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../Services/pelicula.service';
import { Pelicula } from 'src/app/Classes/peliculas';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public elementos: Pelicula[];
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.getElements();
  }

  getElements() {
    this.peliculasService.getAllPeliculas().subscribe(response => {
      this.elementos = response;
    });
  }
}
