import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './Components/bienvenido/bienvenido.component';
import { LoginComponent } from './Components/login/login.component';
import { ListadoDeUsuariosComponent } from './Components/listado-de-usuarios/listado-de-usuarios.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { UsuarioListadoComponent } from './Components/usuario-listado/usuario-listado.component';
import { AnimationsComponent } from './Components/animations/animations.component';

const routes: Routes = [{path: 'home', component: BienvenidoComponent},
{path: 'login', component: LoginComponent},
{path: 'inicio', component: BienvenidoComponent, data: {animation: 'HomePage'}},
{path: 'listado', component: ListadoDeUsuariosComponent},
{path: 'user', component: UsuarioComponent},
{path: 'usuarioListado', component: UsuarioListadoComponent, data: {animation: 'LoginPage'}},
{path: 'animate', component: AnimationsComponent},
{path: '**', pathMatch: 'full', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// ng generate module app-routing --flat --module=app
// router-outlet: TAG HTML creado por Angular, tiene adentro toda la app y se carga dinamicamente
