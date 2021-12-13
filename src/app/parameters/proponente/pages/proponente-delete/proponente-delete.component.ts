import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Proponente } from '../../interfaces/proponente.interface';
import { ProponenteService } from '../../services/proponente.service';

declare const showGeneralMessage:any;


@Component({
  selector: 'app-proponente-delete',
  templateUrl: './proponente-delete.component.html',
  styleUrls: ['./proponente-delete.component.css']
})
export class ProponenteDeleteComponent implements OnInit {

  id: number = 0;
  documento: string="";
  primer_nombre: string="";
  otros_nombres: string="";
  primer_apellido: string="";
  segundo_apellido: string="";
  correo: string="";
  celular: string="";

  constructor(
    private router: Router,
    private service: ProponenteService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: Proponente) =>{
         if(data.id && data.documento && data.primer_nombre && data.otros_nombres && data.primer_apellido && data.segundo_apellido && data.correo && data.celular){
          this.id=data.id;
          this.documento=data.documento;
          this.primer_nombre=data.primer_nombre;
          this.otros_nombres=data.otros_nombres;
          this.primer_apellido=data.primer_apellido;
          this.segundo_apellido=data.segundo_apellido;
          this.correo=data.correo;
          this.celular=data.celular;
          }
       }
     });
  }


  RemoveRecord(){
      this.service.RemoveRecord(this.id).subscribe({
        next: (data: any) =>{
          showGeneralMessage(configurations.REMOVED_MESSAGE);
          this.router.navigate(["/parameters/proponente-read"]);
        }
      });
    }

}
