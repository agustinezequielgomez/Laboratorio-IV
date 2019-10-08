import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { SearchComponent } from './Components/search/search.component';
import { FormAltaComponent } from './Components/form-alta/form-alta.component';
import { FormAltaInheritComponent } from './Components/form-alta-inherit/form-alta-inherit.component';
import { MainVentasComponent } from './Components/main-ventas/main-ventas.component';
import { AuthGuard } from './Services/authGuard.service';
import { BienvenidoComponent } from './Components/bienvenido/bienvenido.component';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'bienvenido'},
                        {path: 'bienvenido', component: BienvenidoComponent, canActivate: [AuthGuard]},
                        {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
                        {path: 'peliculas', pathMatch: 'full', component: MainComponent, canActivate: [AuthGuard]},
                        {path: 'peliculas/alta', component: FormAltaComponent, canActivate: [AuthGuard]},
                        {path: 'busqueda', component: SearchComponent, canActivate: [AuthGuard]},
                        {path: 'actor/alta', component: FormAltaInheritComponent, canActivate: [AuthGuard]},
                        {path: 'actor/listado', component: MainVentasComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
