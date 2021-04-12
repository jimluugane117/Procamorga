
import { from } from "rxjs";
import {AcercaDeComponent} from './acerca-de/acerca-de.component';
import {ContactoComponent} from './contacto/contacto.component';
import {DistribuidoresComponent} from './distribuidores/distribuidores.component';
import {ProductosComponent} from './productos/productos.component';
import {ProveedoresComponent} from './proveedores/proveedores.component';
import {Routes} from '@angular/router';

export const appRoutes:Routes=[
    {path: 'acercade', component:AcercaDeComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'distribuidores', component:DistribuidoresComponent},
    {path: 'productos', component:ProductosComponent},
    {path: 'proveedores', component:ProveedoresComponent},
]