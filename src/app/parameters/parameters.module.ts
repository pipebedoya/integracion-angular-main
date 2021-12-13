import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { AreaCreateComponent } from './area-de-investigacion/pages/area-create/area-create.component';
import { AreaUpdateComponent } from './area-de-investigacion/pages/area-update/area-update.component';
import { AreaDeleteComponent } from './area-de-investigacion/pages/area-delete/area-delete.component';
import { AreaReadComponent } from './area-de-investigacion/pages/area-read/area-read.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacultadCreateComponent } from './facultad/pages/facultad-create/facultad-create.component';
import { FacultadDeleteComponent } from './facultad/pages/facultad-delete/facultad-delete.component';
import { FacultadReadComponent } from './facultad/pages/facultad-read/facultad-read.component';
import { FacultadUpdateComponent } from './facultad/pages/facultad-update/facultad-update.component';
import { DepartamentoCreateComponent } from './departamento/pages/departamento-create/departamento-create.component';
import { DepartamentoDeleteComponent } from './departamento/pages/departamento-delete/departamento-delete.component';
import { DepartamentoReadComponent } from './departamento/pages/departamento-read/departamento-read.component';
import { DepartamentoUpdateComponent } from './departamento/pages/departamento-update/departamento-update.component';
import { ModalidadCreateComponent } from './modalidad/pages/modalidad-create/modalidad-create.component';
import { ModalidadDeleteComponent } from './modalidad/pages/modalidad-delete/modalidad-delete.component';
import { ModalidadUpdateComponent } from './modalidad/pages/modalidad-update/modalidad-update.component';
import { ModalidadReadComponent } from './modalidad/pages/modalidad-read/modalidad-read.component';
import { VinculacionCreateComponent } from './vinculacion/pages/vinculacion-create/vinculacion-create.component';
import { VinculacionDeleteComponent } from './vinculacion/pages/vinculacion-delete/vinculacion-delete.component';
import { VinculacionUpdateComponent } from './vinculacion/pages/vinculacion-update/vinculacion-update.component';
import { VinculacionReadComponent } from './vinculacion/pages/vinculacion-read/vinculacion-read.component';
import { ComiteCreateComponent } from './comite/pages/comite-create/comite-create.component';
import { ComiteDeleteComponent } from './comite/pages/comite-delete/comite-delete.component';
import { ComiteUpdateComponent } from './comite/pages/comite-update/comite-update.component';
import { ComiteReadComponent } from './comite/pages/comite-read/comite-read.component';
import { JuradoCreateComponent } from './jurado/pages/jurado-create/jurado-create.component';
import { JuradoDeleteComponent } from './jurado/pages/jurado-delete/jurado-delete.component';
import { JuradoReadComponent } from './jurado/pages/jurado-read/jurado-read.component';
import { JuradoUpdateComponent } from './jurado/pages/jurado-update/jurado-update.component';
import { ProponenteCreateComponent } from './proponente/pages/proponente-create/proponente-create.component';
import { ProponenteDeleteComponent } from './proponente/pages/proponente-delete/proponente-delete.component';
import { ProponenteReadComponent } from './proponente/pages/proponente-read/proponente-read.component';
import { ProponenteUpdateComponent } from './proponente/pages/proponente-update/proponente-update.component';



@NgModule({
  declarations: [
  
    AreaCreateComponent,
       AreaUpdateComponent,
       AreaDeleteComponent,
       AreaReadComponent,
       FacultadCreateComponent,
       FacultadDeleteComponent,
       FacultadReadComponent,
       FacultadUpdateComponent,
       DepartamentoCreateComponent,
       DepartamentoDeleteComponent,
       DepartamentoReadComponent,
       DepartamentoUpdateComponent,
       ModalidadCreateComponent,
       ModalidadDeleteComponent,
       ModalidadUpdateComponent,
       ModalidadReadComponent,
       VinculacionCreateComponent,
       VinculacionDeleteComponent,
       VinculacionUpdateComponent,
       VinculacionReadComponent,
       ComiteCreateComponent,
       ComiteDeleteComponent,
       ComiteUpdateComponent,
       ComiteReadComponent,
       JuradoCreateComponent,
       JuradoDeleteComponent,
       JuradoReadComponent,
       JuradoUpdateComponent,
       ProponenteCreateComponent,
      ProponenteDeleteComponent,
      ProponenteReadComponent,
      ProponenteUpdateComponent,
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametersModule { }
