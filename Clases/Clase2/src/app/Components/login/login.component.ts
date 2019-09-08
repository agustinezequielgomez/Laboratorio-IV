import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Classes/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public usuario: Usuario;
  public ingresado: Boolean = false;
  constructor() 
  { 
    this.usuario = new Usuario();
    this.usuario.nombre = 'AGUSTIN'
  }

  ngOnInit() {
  }

  Ingresar()
  {
    console.info('usuario', this.usuario);
    this.ingresado = true;
  }

  Desingresar()
  {
    this.ingresado = false;
  }
}
