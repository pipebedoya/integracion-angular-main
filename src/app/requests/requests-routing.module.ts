import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../protected/dashboard/dashboard.component';
import { RequestCreateComponent } from './request/pages/request-create/request-create.component';
import { RequestDeleteComponent } from './request/pages/request-delete/request-delete.component';
import { RequestUpdateComponent } from './request/pages/request-update/request-update.component';
import { RequestReadComponent } from './request/pages/request-read/request-read.component';
import { RecibirRespuestaComponent } from './respuesta/pages/recibir-respuesta/recibir-respuesta.component';


const routes: Routes = [
  {path:'',
    component: DashboardComponent,
    children:[
      { path: 'request-create', component: RequestCreateComponent},
     { path: 'request-delete/:id', component: RequestDeleteComponent },
      { path: 'request-update/:id', component: RequestUpdateComponent },
      { path: 'request-read', component: RequestReadComponent },
     { path: 'recibir-respuesta', component: RecibirRespuestaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
