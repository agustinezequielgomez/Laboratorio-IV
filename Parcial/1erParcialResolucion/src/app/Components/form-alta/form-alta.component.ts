import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import * as moment from 'moment';
import { Pelicula } from '../../Classes/peliculas';
import { PeliculasService } from '../../Services/pelicula.service';
import { timer } from 'rxjs';
import { EstrellaDeCineService } from '../../Services/estrella-de-cine.service';
import { EstrellaDeCine } from '../../Classes/estrella-de-cine';

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent implements OnInit {

  public form: FormGroup;
  public successMessage = false;
  public loading = false;
  public estrellasDeCine: EstrellaDeCine[];
  get nombre() { return this.form.get('nombre'); }
  get tipo() { return this.form.get('tipo'); }
  get fechaDeEstreno() { return this.form.get('fechaDeEstreno'); }
  get cantidadDePublico() { return this.form.get('cantidadDePublico'); }
  get estrellaPrincipal() { return this.form.get('estrellaPrincipal'); }
  constructor(private peliculaService: PeliculasService, private estrellaDeCineService: EstrellaDeCineService) { }

  ngOnInit() {
    this.estrellaDeCineService.getAllEstrellas().subscribe((response) => {
      this.estrellasDeCine = response;
      console.log(this.estrellasDeCine);
    });
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      fechaDeEstreno: new FormControl('', [Validators.required]),
      cantidadDePublico: new FormControl('', [Validators.required]),
      estrellaPrincipal: new FormControl('', Validators.required)
    });
  }

  precioValido(control: FormControl) {
    if (control.value < 0 || control.value >= 1000) {
      return {
        precioValido: true
      };
    }
    return null;
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
    console.log(this.estrellaPrincipal.value);
    const PELICULA: Pelicula = {
      id: 0,
      nombre: this.nombre.value,
      tipo: this.tipo.value,
      fechaDeEstreno: moment(this.fechaDeEstreno.value, 'YYYY/MM/dd').toDate(),
      cantidadDePublico: this.cantidadDePublico.value,
      rutaDeFoto: 'http://dummyimage.com/153x373.png/cc0000/ffffff',
      idEstrella: this.estrellaPrincipal.value.id
    };

    console.log(PELICULA, JSON.stringify(PELICULA));
    this.loading = true;
    this.peliculaService.createPelicula(PELICULA).subscribe((response) => {
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
