import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisesListComponent } from './Components/paises-list/paises-list.component';
import { PaisesService } from './Services/paises.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './Services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    PaisesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [PaisesService, HttpService, HttpHeaders],
  bootstrap: [AppComponent]
})
export class AppModule { }
