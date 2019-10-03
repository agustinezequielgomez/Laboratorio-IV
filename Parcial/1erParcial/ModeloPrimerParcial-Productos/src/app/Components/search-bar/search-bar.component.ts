import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { Productos } from 'src/app/Classes/productos';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public productoBuscado: string;
  @Output() searchResult = new EventEmitter<Productos[]>();
  constructor(private productoService: ProductosService) { }

  ngOnInit() {
  }

  searchProduct() {
    if(this.productoBuscado !== '')
    {
      this.productoService.searchProduct(this.productoBuscado).subscribe((response) => {
        this.searchResult.emit(response);
      });
    }
    else
    {
      this.searchResult.emit([]);
    }
  }

}
