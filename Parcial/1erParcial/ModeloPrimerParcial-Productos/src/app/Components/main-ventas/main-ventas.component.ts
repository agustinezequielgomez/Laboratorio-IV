import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { VentasService } from '../../Services/ventas.service';
import { Ventas } from 'src/app/Classes/ventas';
import { Productos } from 'src/app/Classes/productos';

@Component({
  selector: 'app-main-ventas',
  templateUrl: './main-ventas.component.html',
  styleUrls: ['./main-ventas.component.css']
})
export class MainVentasComponent implements OnInit {

  public ventas: Ventas[];
  public productos: Productos[];
  constructor(private productosService: ProductosService, private ventasService: VentasService) { }

  ngOnInit() {
    this.ventasService.getAllVentas().subscribe((responseVentas) => {
      this.ventas = responseVentas;
      this.productosService.getAllProducts().subscribe((responseProductos) => {
        this.productos = responseProductos;
        this.ventas.forEach(venta => {
          this.productos.forEach(producto => {
            if (venta.id_producto === producto.id)
            {
              venta.rutaDeFoto = producto.rutaDeFoto;
            }
          });
        });
        console.log(this.ventas);
      });
    });
  }

}
