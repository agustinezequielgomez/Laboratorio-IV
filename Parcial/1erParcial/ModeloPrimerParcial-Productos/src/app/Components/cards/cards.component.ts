import { Component, OnInit, Input } from '@angular/core';
import { Productos } from '../../Classes/productos';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() elements: Productos[];
  constructor() { }

  ngOnInit() {
  }

}
