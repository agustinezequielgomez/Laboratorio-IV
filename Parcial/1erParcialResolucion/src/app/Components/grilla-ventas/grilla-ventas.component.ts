import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs';
import { EstrellaDeCine } from '../../Classes/estrella-de-cine';
import { Pelicula } from 'src/app/Classes/peliculas';
import { Parche } from '../../Classes/parche';

@Component({
  selector: 'app-grilla-ventas',
  templateUrl: './grilla-ventas.component.html',
  styleUrls: ['./grilla-ventas.component.css']
})
export class GrillaVentasComponent implements OnInit {

  @Input() peliculas: Pelicula[];
  @Input() elementos: Parche[];
  constructor() { }

  ngOnInit() {
  }

}
