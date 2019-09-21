import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './Components/bienvenido/bienvenido.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { ListadoDeUsuariosComponent } from './Components/listado-de-usuarios/listado-de-usuarios.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { GrillaComponent } from './Components/grilla/grilla.component';
import { ListadoPostaComponent } from './Components/listado-posta/listado-posta.component';
import { UsuarioListadoComponent } from './Components/usuario-listado/usuario-listado.component';
import { AnimationsComponent } from './Components/animations/animations.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ListadoDeUsuariosComponent,
    UsuarioComponent,
    GrillaComponent,
    ListadoPostaComponent,
    UsuarioListadoComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
