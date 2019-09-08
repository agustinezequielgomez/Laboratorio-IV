import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../Classes/usuario';

@Component({
  selector: 'app-listado-de-usuarios',
  templateUrl: './listado-de-usuarios.component.html',
  styleUrls: ['./listado-de-usuarios.component.css']
})
export class ListadoDeUsuariosComponent implements OnInit {

  @Input()listado: Usuario[];
  @Output() sendUser = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<any>();
  constructor() {}

  editarUser(usuarioAEditar)
  {
    this.sendUser.emit(usuarioAEditar);
  }

  borarUser(usuarioABorrar)
  {
    this.deleteUser.emit(usuarioABorrar);
  }

  ngOnInit() {
  }

}
