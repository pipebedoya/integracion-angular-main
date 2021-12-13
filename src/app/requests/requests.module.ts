import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestCreateComponent } from './request/pages/request-create/request-create.component';
import { RequestDeleteComponent } from './request/pages/request-delete/request-delete.component';
import { RequestUpdateComponent } from './request/pages/request-update/request-update.component';
import { RequestReadComponent } from './request/pages/request-read/request-read.component';



@NgModule({
  declarations: [
    RequestCreateComponent,
    RequestDeleteComponent,
    RequestUpdateComponent,
    RequestReadComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RequestsModule { }
