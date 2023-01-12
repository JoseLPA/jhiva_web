import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MisionComponent } from './mision/mision.component';
import { VisionValoresComponent } from './vision-valores/vision-valores.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'inicio', component: InicioComponent},
      {path: 'sobre-nosotros', component: SobreNosotrosComponent},
      {path: 'mision', component: MisionComponent},
      {path: 'visionValores', component: VisionValoresComponent},
      {path: 'experiencias', component: ExperienciasComponent},
      {path: 'contactanos', component: ContactanosComponent},
      {path: 'clientes', component: ClientesComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: '**', redirectTo: 'inicio'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
