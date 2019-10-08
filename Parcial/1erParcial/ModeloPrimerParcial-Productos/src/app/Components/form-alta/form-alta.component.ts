import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import * as moment from 'moment';
import { Productos } from '../../Classes/productos';
import { ProductosService } from '../../Services/productos.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent implements OnInit {

  public form: FormGroup;
  public successMessage = false;
  public loading = false;
  get descripcion() { return this.form.get('descripcion'); }
  get tipo() { return this.form.get('tipo'); }
  get fechaDeVencimiento() { return this.form.get('fechaDeVencimiento'); }
  get precio() { return this.form.get('precio'); }
  constructor(private productoService: ProductosService) { }

  ngOnInit() {
    this.form = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      fechaDeVencimiento: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required, this.precioValido])
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
    const PRODUCTO: Productos = {
      id: 0,
      descripcion: this.descripcion.value,
      tipo: this.tipo.value,
      fechaDeVencimiento: moment(this.fechaDeVencimiento.value, 'YYYY/MM/dd').toDate(),
      precio: this.precio.value,
      rutaDeFoto: 'http://dummyimage.com/153x373.png/cc0000/ffffff'
    };
    this.loading = true;
    this.productoService.createProduct(PRODUCTO).subscribe((response) => {
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
