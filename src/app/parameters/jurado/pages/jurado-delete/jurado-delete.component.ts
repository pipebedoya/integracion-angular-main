import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Jurado } from '../../interfaces/jurado.interface';
import { JuradoService } from '../../services/jurado.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-jurado-delete',
  templateUrl: './jurado-delete.component.html',
  styleUrls: ['./jurado-delete.component.css']
})
export class JuradoDeleteComponent implements OnInit {

  id: number = 0;
  nombre: string="";
  correo: string="";
  celular: string="";
  entidad: string="";

  constructor(
    private router: Router,
    private service: JuradoService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: Jurado) =>{
         if(data.id && data.nombre && data.correo && data.celular && data.entidad){
          this.id=data.id;
          this.nombre=data.nombre;
          this.correo=data.correo;
          this.celular=data.celular;
          this.entidad=data.entidad;
          }
       }
     });
  }


  RemoveRecord(){
      this.service.RemoveRecord(this.id).subscribe({
        next: (data: any) =>{
          showGeneralMessage(configurations.REMOVED_MESSAGE);
          this.router.navigate(["/parameters/jurado-read"]);
        }
      });
    }

}
