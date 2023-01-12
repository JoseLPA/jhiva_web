import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MisionComponent } from './mision/mision.component';
import { VisionValoresComponent } from './vision-valores/vision-valores.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    InicioComponent,
    SobreNosotrosComponent,
    ContactanosComponent,
    ClientesComponent,
    ProyectosComponent,
    MisionComponent,
    VisionValoresComponent,
    ExperienciasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GoogleMapsModule
  ]
})
export class HomeModule { }
