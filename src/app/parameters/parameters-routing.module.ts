import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../protected/dashboard/dashboard.component';
import { AreaCreateComponent } from './area-de-investigacion/pages/area-create/area-create.component';
import { AreaDeleteComponent } from './area-de-investigacion/pages/area-delete/area-delete.component';
import { AreaReadComponent } from './area-de-investigacion/pages/area-read/area-read.component';
import { AreaUpdateComponent } from './area-de-investigacion/pages/area-update/area-update.component';
import { ComiteCreateComponent } from './comite/pages/comite-create/comite-create.component';
import { ComiteDeleteComponent } from './comite/pages/comite-delete/comite-delete.component';
import { ComiteReadComponent } from './comite/pages/comite-read/comite-read.component';
import { ComiteUpdateComponent } from './comite/pages/comite-update/comite-update.component';
import { DepartamentoCreateComponent } from './departamento/pages/departamento-create/departamento-create.component';
import { DepartamentoDeleteComponent } from './departamento/pages/departamento-delete/departamento-delete.component';
import { DepartamentoReadComponent } from './departamento/pages/departamento-read/departamento-read.component';
import { DepartamentoUpdateComponent } from './departamento/pages/departamento-update/departamento-update.component';
import { FacultadCreateComponent } from './facultad/pages/facultad-create/facultad-create.component';
import { FacultadDeleteComponent } from './facultad/pages/facultad-delete/facultad-delete.component';
import { FacultadReadComponent } from './facultad/pages/facultad-read/facultad-read.component';
import { FacultadUpdateComponent } from './facultad/pages/facultad-update/facultad-update.component';
import { JuradoCreateComponent } from './jurado/pages/jurado-create/jurado-create.component';
import { JuradoDeleteComponent } from './jurado/pages/jurado-delete/jurado-delete.component';
import { JuradoReadComponent } from './jurado/pages/jurado-read/jurado-read.component';
import { JuradoUpdateComponent } from './jurado/pages/jurado-update/jurado-update.component';
import { ModalidadCreateComponent } from './modalidad/pages/modalidad-create/modalidad-create.component';
import { ModalidadDeleteComponent } from './modalidad/pages/modalidad-delete/modalidad-delete.component';
import { ModalidadReadComponent } from './modalidad/pages/modalidad-read/modalidad-read.component';
import { ModalidadUpdateComponent } from './modalidad/pages/modalidad-update/modalidad-update.component';
import { VinculacionCreateComponent } from './vinculacion/pages/vinculacion-create/vinculacion-create.component';
import { VinculacionDeleteComponent } from './vinculacion/pages/vinculacion-delete/vinculacion-delete.component';
import { VinculacionReadComponent } from './vinculacion/pages/vinculacion-read/vinculacion-read.component';
import { VinculacionUpdateComponent } from './vinculacion/pages/vinculacion-update/vinculacion-update.component';
import { ProponenteCreateComponent } from './proponente/pages/proponente-create/proponente-create.component';
import { ProponenteDeleteComponent } from './proponente/pages/proponente-delete/proponente-delete.component';
import { ProponenteReadComponent } from './proponente/pages/proponente-read/proponente-read.component';
import { ProponenteUpdateComponent } from './proponente/pages/proponente-update/proponente-update.component';
import { EstadoCreateComponent } from './estado/pages/estado-create/estado-create.component';
import { EstadoDeleteComponent } from './estado/pages/estado-delete/estado-delete.component';
import { EstadoUpdateComponent } from './estado/pages/estado-update/estado-update.component';
import { EstadoReadComponent } from './estado/pages/estado-read/estado-read.component';
import { TipoSolicitudCreateComponent } from './tipo-solicitud/pages/tipo-solicitud-create/tipo-solicitud-create.component';
import { TipoSolicitudDeleteComponent } from './tipo-solicitud/pages/tipo-solicitud-delete/tipo-solicitud-delete.component';
import { TipoSolicitudUpdateComponent } from './tipo-solicitud/pages/tipo-solicitud-update/tipo-solicitud-update.component';
import { TipoSolicitudReadComponent } from './tipo-solicitud/pages/tipo-solicitud-read/tipo-solicitud-read.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      { path: 'area-create', component: AreaCreateComponent },
      { path: 'area-delete/:id', component: AreaDeleteComponent },
      { path: 'area-update/:id', component: AreaUpdateComponent },
      { path: 'area-read', component: AreaReadComponent },
      { path: 'facultad-create', component: FacultadCreateComponent },
      { path: 'facultad-delete/:id', component: FacultadDeleteComponent },
      { path: 'facultad-update/:id', component: FacultadUpdateComponent },
      { path: 'facultad-read', component: FacultadReadComponent },
      { path: 'comite-create', component: ComiteCreateComponent },
      { path: 'comite-delete/:id', component: ComiteDeleteComponent },
      { path: 'comite-update/:id', component: ComiteUpdateComponent },
      { path: 'comite-read', component: ComiteReadComponent },
      {path: 'departamento-create', component: DepartamentoCreateComponent },
      { path: 'departamento-delete/:id', component: DepartamentoDeleteComponent },
      { path: 'departamento-update/:id', component: DepartamentoUpdateComponent },
      { path: 'departamento-read', component: DepartamentoReadComponent },
      {path: 'jurado-create', component: JuradoCreateComponent },
      { path: 'jurado-delete/:id', component: JuradoDeleteComponent },
      { path: 'jurado-update/:id', component: JuradoUpdateComponent },
      { path: 'jurado-read', component: JuradoReadComponent},
      {path: 'modalidad-create', component: ModalidadCreateComponent },
      { path: 'modalidad-delete/:id', component: ModalidadDeleteComponent },
      { path: 'modalidad-update/:id', component: ModalidadUpdateComponent },
      { path: 'modalidad-read', component: ModalidadReadComponent },
      {path: 'vinculacion-create', component: VinculacionCreateComponent },
      { path: 'vinculacion-delete/:id', component: VinculacionDeleteComponent },
      { path: 'vinculacion-update/:id', component: VinculacionUpdateComponent },
      { path: 'vinculacion-read', component: VinculacionReadComponent },
      { path: 'proponente-create', component: ProponenteCreateComponent },
      { path: 'proponente-delete/:id', component: ProponenteDeleteComponent },
      { path: 'proponente-update/:id', component: ProponenteUpdateComponent },
      { path: 'proponente-read', component: ProponenteReadComponent},
      { path: 'estado-create', component: EstadoCreateComponent },
      { path: 'estado-delete/:id', component: EstadoDeleteComponent },
      { path: 'estado-update/:id', component: EstadoUpdateComponent },
      { path: 'estado-read', component: EstadoReadComponent},
      { path: 'tipo-solicitud-create', component: TipoSolicitudCreateComponent },
      { path: 'tipo-solicitud-delete/:id', component: TipoSolicitudDeleteComponent },
      { path: 'tipo-solicitud-update/:id', component: TipoSolicitudUpdateComponent },
      { path: 'tipo-solicitud-read', component: TipoSolicitudReadComponent},
      { path: 'proponente-create', component: ProponenteCreateComponent },
      { path: 'proponente-delete/:id', component: ProponenteDeleteComponent },
      { path: 'proponente-update/:id', component: ProponenteUpdateComponent },
      { path: 'proponente-read', component: ProponenteReadComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
