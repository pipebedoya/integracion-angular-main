import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../../interfaces/respuesta.interface';
import { RecibirRespuestaService } from '../../service/recibir-respuesta.service';

@Component({
  selector: 'app-recibir-respuesta',
  templateUrl: './recibir-respuesta.component.html',
  styleUrls: ['./recibir-respuesta.component.css']
})

export class RecibirRespuestaComponent implements OnInit {

  codigo: number=0;
  observaciones:string="";
  fecha: Date= new Date();
  

  constructor(private serviceRespuesta: RecibirRespuestaService) { }

  ngOnInit(): void {
  }

  RecibirRespuesta(respuesta:string){
    alert(this.fecha);
    if(respuesta=="ACEPTO"){
      let res= new Respuesta();
      res.respuesta= respuesta;
      res.codigo_solicitud=this.codigo;
      res.observaciones=this.observaciones;
      res.fecha_respuesta=this.fecha;
      this.serviceRespuesta.SaveRespuesta(res).subscribe({
        next: (data: Respuesta) =>{
          alert("Ingrese a su perfil para ver el trabajo");
          window.close();
        }
      });
    }
    else{
      let res= new Respuesta();
      res.respuesta= respuesta;
      res.codigo_solicitud=this.codigo;
      res.observaciones=this.observaciones;
      res.fecha_respuesta=this.fecha;
      this.serviceRespuesta.SaveRespuesta(res).subscribe({
        next: (data: Respuesta) =>{
          alert("Realizado Correctamente");
          window.close();
        }
      });
    }
   }

  }
