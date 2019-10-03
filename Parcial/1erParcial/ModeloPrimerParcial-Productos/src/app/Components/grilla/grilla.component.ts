import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Productos } from '../../Classes/productos';
import { timer } from 'rxjs';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  @Input() elementos: Productos[];
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
