import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../Classes/peliculas';
import { timer } from 'rxjs';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  @Input() elementos: Pelicula[];
  @Output() reload = new EventEmitter();
  public attributes: any[];
  constructor() { }

  ngOnInit() {
    timer(500).subscribe(() => {
      this.attributes = Object.keys(this.elementos[0]);
    });
  }

  reloadList() {
    this.reload.emit();
  }

}
