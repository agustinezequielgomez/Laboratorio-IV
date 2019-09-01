import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Classes/usuario';
import { ListadoDeUsuariosComponent } from '../listado-de-usuarios/listado-de-usuarios.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;
  public listadoDeUsuarios: Usuario[];
  public showPass: boolean;
  public type: string;
  constructor() 
  {
    this.listadoDeUsuarios = [];
    this.showPass = false;
    this.type = 'password';
    this.usuario = {nombre: '', clave: ''};
  }

  registrarUsuario(): void
  {
    const usuarioLista: Usuario = new Usuario();
    usuarioLista.nombre = this.usuario.nombre;
    usuarioLista.clave = this.usuario.clave;
    this.listadoDeUsuarios.push(usuarioLista);
    console.log(this.listadoDeUsuarios);
  }

  showPassword()
  {
    this.showPass = !this.showPass;
    if(this.showPass)
    {
      this.type = 'text';
    }
    else
    {
      this.type = 'password';
    }
  }

  ngOnInit() {
  }

}
