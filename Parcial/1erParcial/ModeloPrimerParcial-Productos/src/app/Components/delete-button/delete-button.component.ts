import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { ProductosService } from '../../Services/productos.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {

  @Input() elementToDelete;
  @Output() delete = new EventEmitter();
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
  }

  deleteElement() {
    this.productosService.deleteProduct(this.elementToDelete.id).subscribe();
    timer(500).subscribe(() => {
      this.delete.emit();
    });
  }

}
