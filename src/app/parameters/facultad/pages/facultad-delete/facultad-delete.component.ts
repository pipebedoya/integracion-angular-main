import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Facultad } from '../../interfaces/facultad.interface';
import { FacultadService } from '../../services/facultad.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-facultad-delete',
  templateUrl: './facultad-delete.component.html',
  styleUrls: ['./facultad-delete.component.css']
})
export class FacultadDeleteComponent implements OnInit {

  id: number = 0;
  nombre: string="";

  constructor(
    private router: Router,
    private service: FacultadService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: Facultad) =>{
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
          this.router.navigate(["/parameters/facultad-read"]);
        }
      });
    }

}
