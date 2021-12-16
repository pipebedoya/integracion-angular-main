import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { TipoSolicitud } from '../../interfaces/tipo-solicitud.interface';
import { TipoSolicitudService } from '../../services/tipo-solicitud.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-tipo-solicitud-delete',
  templateUrl: './tipo-solicitud-delete.component.html',
  styleUrls: ['./tipo-solicitud-delete.component.css']
})
export class TipoSolicitudDeleteComponent implements OnInit {

  id: number = 0;
  nombre: string="";

  constructor(
    private router: Router,
    private service: TipoSolicitudService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: TipoSolicitud) =>{
         if(data.id && data.nombre){
          this.id=data.id;
          this.nombre=data.nombre;
          }
       }
     });
  }


  RemoveRecord(){
      this.service.RemoveRecord(this.id).subscribe({
        next: (data: any) =>{
          showGeneralMessage(configurations.REMOVED_MESSAGE);
          this.router.navigate(["/parameters/modalidad-read"]);
        }
      });
    }
}
