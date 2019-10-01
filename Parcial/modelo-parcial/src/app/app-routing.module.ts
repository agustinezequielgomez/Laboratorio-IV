import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParcialComponent } from './Components/parcial/parcial.component';


const routes: Routes = [{path: '', component: ParcialComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
