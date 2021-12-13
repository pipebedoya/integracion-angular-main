import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Departamento } from '../../interfaces/departamento.interface';
import { DepartamentoService } from '../../services/departamento.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-departamento-delete',
  templateUrl: './departamento-delete.component.html',
  styleUrls: ['./departamento-delete.component.css']
})
export class DepartamentoDeleteComponent implements OnInit {
  id: number = 0;
  nombre: string="";

  constructor(
    private router: Router,
    private service: DepartamentoService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: Departamento) =>{
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
          this.router.navigate(["/parameters/departamento-read"]);
        }
      });
    }


}
