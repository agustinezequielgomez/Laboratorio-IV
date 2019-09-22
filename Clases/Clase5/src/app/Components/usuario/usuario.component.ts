import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Usuario } from '../../Classes/usuario';
import { ListadoDeUsuariosComponent } from '../listado-de-usuarios/listado-de-usuarios.component';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() miUsuario: Usuario = new Usuario();
  @Output() seCreo = new EventEmitter<any>();
  public listadoDeUsuarios: Usuario[];
  public showPass: boolean;
  public type: string;
  constructor()
  {
    this.listadoDeUsuarios = [];
    this.showPass = false;
    this.type = 'password';
  }

  registrarUsuario(): void {
    const usuarioLista: Usuario = new Usuario();
    usuarioLista.nombre = this.miUsuario.nombre;
    usuarioLista.clave = this.miUsuario.clave;
    this.seCreo.emit(usuarioLista);
    this.miUsuario = new Usuario();
  }

  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  cancelarEdit()
  {
    this.miUsuario = new Usuario();
  }

  ngOnInit() {
  }

}
