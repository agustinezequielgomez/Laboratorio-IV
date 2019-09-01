import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../Classes/usuario';

@Component({
  selector: 'app-listado-de-usuarios',
  templateUrl: './listado-de-usuarios.component.html',
  styleUrls: ['./listado-de-usuarios.component.css']
})
export class ListadoDeUsuariosComponent implements OnInit {

  @Input()listado: Usuario[];
  constructor() 
  {
  //   this.listado = [{nombre: 'Agustin', clave: '1234'}, {nombre: 'Camila', clave: 'admin'},
  // {nombre: 'Alberto', clave: 'pass123'}];
  }

  ngOnInit() {
  }

}
