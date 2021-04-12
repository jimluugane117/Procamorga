import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';

import { AppComponent } from './app.component';
import { BarraNavSupComponent } from './barra-nav-sup/barra-nav-sup.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { from } from 'rxjs';
import { ProductosComponent } from './productos/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { DistribuidoresComponent } from './distribuidores/distribuidores.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavSupComponent,
    AcercaDeComponent,
    ProductosComponent,
    ProveedoresComponent,
    DistribuidoresComponent,
    ContactoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
