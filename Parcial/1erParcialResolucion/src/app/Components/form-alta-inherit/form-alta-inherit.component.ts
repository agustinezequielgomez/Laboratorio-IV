import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../Services/pelicula.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { timer } from 'rxjs';
import { EstrellaDeCineService } from '../../Services/estrella-de-cine.service';
import { Pelicula } from '../../Classes/peliculas';
import { EstrellaDeCine } from '../../Classes/estrella-de-cine';

@Component({
  selector: 'app-form-alta-inherit',
  templateUrl: './form-alta-inherit.component.html',
  styleUrls: ['./form-alta-inherit.component.css']
})
export class FormAltaInheritComponent implements OnInit {

  public form: FormGroup;
  public successMessage = false;
  public loading = false;
  public pelicula: Pelicula[];
  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get nacionalidad() { return this.form.get('nacionalidad'); }
  get fechaDeNacimiento() { return this.form.get('fechaDeNacimiento'); }
  constructor(private peliculaService: PeliculasService, private estrellaDeCineService: EstrellaDeCineService) {
  }

  ngOnInit() {
    this.peliculaService.getAllPeliculas().subscribe((response) => {
      this.pelicula = response;
    });
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      nacionalidad: new FormControl('', Validators.required),
      fechaDeNacimiento: new FormControl('', [Validators.required, this.fechaValida]),
    });
  }

  fechaValida(control: FormControl) {
    const date = moment(control.value, 'dd/MM/YYYY');
    if (!date.isValid()) {
      return {
        fechaValida: true
      };
    }
    return null;
  }

  alta() {
    const ESTRELLA_DE_CINE: EstrellaDeCine = {
      id: 0,
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      nacionalidad: this.nacionalidad.value,
      fechaDeNacimiento: moment(this.fechaDeNacimiento.value, 'YYYY/MM/dd').toDate(),
    };
    this.loading = true;
    this.estrellaDeCineService.createVenta(ESTRELLA_DE_CINE).subscribe((response) => {
      timer(3000).subscribe(() => {
        this.loading = false;
        if (response) {
          this.form.reset();
          this.successMessage = true;
          timer(5000).subscribe(() => {
            this.successMessage = false;
          });
        }
      });
    });
  }
}

