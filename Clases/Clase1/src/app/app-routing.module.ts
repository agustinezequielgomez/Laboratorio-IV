import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './Components/bienvenido/bienvenido.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [{path: 'home', component: BienvenidoComponent},
{path: 'login', component: LoginComponent},
{path: 'inicio', component: BienvenidoComponent},
{path: '**', pathMatch: 'full', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// ng generate module app-routing --flat --module=app
// router-outlet: TAG HTML creado por Angular, tiene adentro toda la app y se carga dinamicamente
