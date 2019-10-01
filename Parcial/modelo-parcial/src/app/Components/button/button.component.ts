import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../Classes/producto';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() productoSeleccionado: Producto;
  @Output() productoEliminado = new EventEmitter();
  constructor(private service: ProductsService) { }

  ngOnInit() {
  }

  borrarElemento() {
    this.service.deleteProduct(this.productoSeleccionado.id).subscribe((response) => {
      this.productoEliminado.emit();
    });
  }
}
