import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Productos } from 'src/app/Classes/productos';
import { Ventas } from '../../Classes/ventas';
import { timer } from 'rxjs';
import { VentasService } from '../../Services/ventas.service';

@Component({
  selector: 'app-form-alta-inherit',
  templateUrl: './form-alta-inherit.component.html',
  styleUrls: ['./form-alta-inherit.component.css']
})
export class FormAltaInheritComponent implements OnInit {

  public form: FormGroup;
  public successMessage = false;
  public loading = false;
  public productos: Productos[];
  get productoSeleccionado() { return this.form.get('productoSeleccionado'); }
  get fechaDeVenta() { return this.form.get('fechaDeVenta'); }
  get cantidad() { return this.form.get('cantidad'); }
  constructor(private productoService: ProductosService, private ventaService: VentasService) {
  }

  ngOnInit() {
    this.productoService.getAllProducts().subscribe((response) => {
      this.productos = response;
    });
    this.form = new FormGroup({
      productoSeleccionado: new FormControl('', Validators.required),
      fechaDeVenta: new FormControl('', [Validators.required, this.fechaValida]),
      cantidad: new FormControl('', Validators.required)
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
    const VENTA: Ventas = {
      id: this.productoSeleccionado.value.id,
      descripcion: this.productoSeleccionado.value.descripcion,
      tipo: this.productoSeleccionado.value.tipo,
      precio: this.productoSeleccionado.value.precio,
      rutaDeFoto: this.productoSeleccionado.value.rutaDeFoto,
      fechaDeVencimiento: this.productoSeleccionado.value.fechaDeVencimiento,
      cantidad: this.cantidad.value,
      fechaDeVenta: moment(this.fechaDeVenta.value, 'YYYY/MM/dd').toDate(),
    };
    this.loading = true;
    this.ventaService.createVenta(VENTA).subscribe((response) => {
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

