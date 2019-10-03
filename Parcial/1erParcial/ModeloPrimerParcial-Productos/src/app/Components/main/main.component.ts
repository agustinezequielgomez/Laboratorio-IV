import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { Productos } from 'src/app/Classes/productos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public elementos: Productos[];
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.getElements();
  }

  getElements() {
    this.productosService.getAllProducts().subscribe(response => {
      this.elementos = response;
    });
  }
}
