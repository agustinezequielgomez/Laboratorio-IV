import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GrillaComponent } from './Components/grilla/grilla.component';
import { ParcialComponent } from './Components/parcial/parcial.component';
import { ButtonComponent } from './Components/button/button.component';
import { ProductsService } from './Services/products.service';
import { HttpService } from './Services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    ParcialComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
