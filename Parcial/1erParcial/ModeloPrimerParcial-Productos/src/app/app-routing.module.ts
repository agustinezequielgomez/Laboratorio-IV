import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { SearchComponent } from './Components/search/search.component';
import { FormAltaComponent } from './Components/form-alta/form-alta.component';
import { FormAltaInheritComponent } from './Components/form-alta-inherit/form-alta-inherit.component';
import { MainVentasComponent } from './Components/main-ventas/main-ventas.component';


const routes: Routes = [{path: 'productos', pathMatch: 'full', component: MainComponent},
                        {path: 'productos/alta', component: FormAltaComponent},
                        {path: 'busqueda', component: SearchComponent},
                        {path: 'ventas/nueva', component: FormAltaInheritComponent},
                        {path: 'ventas/listado', component: MainVentasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
