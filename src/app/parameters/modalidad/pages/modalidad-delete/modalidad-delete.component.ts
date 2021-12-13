import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { ModalidadService } from '../../services/modalidad.service';
import { Modalidad } from '../../interfaces/modalidad.interface';

declare const showGeneralMessage:any;


@Component({
  selector: 'app-modalidad-delete',
  templateUrl: './modalidad-delete.component.html',
  styleUrls: ['./modalidad-delete.component.css']
})
export class ModalidadDeleteComponent implements OnInit {

  id: number = 0;
  nombre: string="";

  constructor(
    private router: Router,
    private service: ModalidadService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: Modalidad) =>{
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
