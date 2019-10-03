import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './Services/http.service';
import { MainComponent } from './Components/main/main.component';
import { GrillaComponent } from './Components/grilla/grilla.component';
import { ProductosService } from './Services/productos.service';
import { DeleteButtonComponent } from './Components/delete-button/delete-button.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './Components/search/search.component';
import { CardsComponent } from './Components/cards/cards.component';
import { FormAltaComponent } from './Components/form-alta/form-alta.component';
import { FormAltaInheritComponent } from './Components/form-alta-inherit/form-alta-inherit.component';
import { VentasService } from './Services/ventas.service';
import { MainVentasComponent } from './Components/main-ventas/main-ventas.component';
import { GrillaVentasComponent } from './Components/grilla-ventas/grilla-ventas.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploaderComponent } from './Components/file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GrillaComponent,
    DeleteButtonComponent,
    SearchBarComponent,
    SearchComponent,
    CardsComponent,
    FormAltaComponent,
    FormAltaInheritComponent,
    MainVentasComponent,
    GrillaVentasComponent,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  providers: [HttpService, ProductosService, VentasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
