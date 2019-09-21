import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../Classes/usuario';

@Component({
  selector: 'app-listado-posta',
  templateUrl: './listado-posta.component.html',
  styleUrls: ['./listado-posta.component.css']
})
export class ListadoPostaComponent implements OnInit {

  @Input() listado: Usuario[];
  constructor() { }

  ngOnInit() {
  }

}
