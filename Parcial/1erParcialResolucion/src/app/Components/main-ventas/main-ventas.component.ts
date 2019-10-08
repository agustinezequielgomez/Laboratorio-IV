import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../Services/pelicula.service';
import { EstrellaDeCineService } from '../../Services/estrella-de-cine.service';
import { Ventas } from 'src/app/Classes/ventas';
import { Pelicula } from 'src/app/Classes/peliculas';
import { EstrellaDeCine } from '../../Classes/estrella-de-cine';
import { Parche } from 'src/app/Classes/parche';

@Component({
  selector: 'app-main-ventas',
  templateUrl: './main-ventas.component.html',
  styleUrls: ['./main-ventas.component.css']
})
export class MainVentasComponent implements OnInit {

  public estrellas: EstrellaDeCine[];
  public peliculas: Pelicula[];
  public displayingElements: Parche[] = [];
  public fotos: string[];
  constructor(private peliculasService: PeliculasService, private estrellaDeCineService: EstrellaDeCineService) { }

  ngOnInit() {
    this.estrellaDeCineService.getAllEstrellas().subscribe((responseVentas) => {
      this.estrellas = responseVentas;
      this.peliculasService.getAllPeliculas().subscribe((responseProductos) => {
        this.peliculas = responseProductos;
        this.estrellas.forEach(estrella => {
          this.peliculas.forEach(pelicula => {
            if (estrella.id === pelicula.idEstrella) {
              const PARCHE = new Parche();
              PARCHE.id = estrella.id;
              PARCHE.nombre = estrella.nombre;
              PARCHE.apellido = estrella.apellido;
              PARCHE.nacionalidad = estrella.nacionalidad;
              PARCHE.fechaDeNacimiento = estrella.fechaDeNacimiento;
              PARCHE.nombrePelicula = pelicula.nombre;
              PARCHE.rutaDeFoto = pelicula.rutaDeFoto;
              this.displayingElements.push(PARCHE);
            }
          });
        });
        console.log(this.displayingElements);
      });
    });
  }

}
