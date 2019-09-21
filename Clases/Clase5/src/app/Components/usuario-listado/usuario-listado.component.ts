import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from 'src/app/Classes/usuario';
import { AnimationsComponent } from '../animations/animations.component';

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styleUrls: ['./usuario-listado.component.css']
})
export class UsuarioListadoComponent implements OnInit {

  listaDeUsuarios: Array<Usuario> = new Array<Usuario>();
  usuarioAEditar: Usuario;
  hacerAlgo($event)
  {
    this.listaDeUsuarios.push($event);
  }

  recibirUsuarioAEditar(user)
  {
    this.usuarioAEditar = user;
  }

  borrarUsuario($event)
  {
    const nuevaLista = Array<Usuario>();
    this.listaDeUsuarios.forEach((usuario) =>
    {
      if(usuario.nombre !== $event.nombre && usuario.clave !== $event.clave)
      {
        nuevaLista.push(usuario);
      }
    });
    this.listaDeUsuarios = nuevaLista;
  }
  constructor() {
    this.usuarioAEditar = new Usuario();
   }

  ngOnInit() {
  }

}
