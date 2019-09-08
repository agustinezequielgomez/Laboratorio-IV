import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../Classes/usuario';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  @Input() lista: Usuario[] = [];
  constructor() { }

  ngOnInit() {
  }

}
