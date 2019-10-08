import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../Classes/peliculas';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() elements: Pelicula[];
  constructor() { }

  ngOnInit() {
  }

}
