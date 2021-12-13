import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Comite } from '../../interfaces/comite.interface';
import { ComiteService } from '../../services/comite.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-comite-delete',
  templateUrl: './comite-delete.component.html',
  styleUrls: ['./comite-delete.component.css']
})
export class ComiteDeleteComponent implements OnInit {

  id: number = 0;
  nombre: string="";

  constructor(
    private router: Router,
    private service: ComiteService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: Comite) =>{
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
          this.router.navigate(["/parameters/comite-read"]);
        }
      });
    }

}
