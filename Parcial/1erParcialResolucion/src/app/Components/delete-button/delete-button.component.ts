import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeliculasService } from '../../Services/pelicula.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {

  @Input() elementToDelete;
  @Output() delete = new EventEmitter();
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  deleteElement() {
    this.peliculasService.deletePelicula(this.elementToDelete.id).subscribe();
    timer(500).subscribe(() => {
      this.delete.emit();
    });
  }

}
