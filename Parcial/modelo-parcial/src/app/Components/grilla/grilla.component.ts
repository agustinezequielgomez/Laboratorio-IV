import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../Classes/producto';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss']
})
export class GrillaComponent implements OnInit {


  public productos: Producto[];
  constructor(private productoService: ProductsService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProducts().subscribe((response) => {
      this.productos = response;
    });
  }

}
