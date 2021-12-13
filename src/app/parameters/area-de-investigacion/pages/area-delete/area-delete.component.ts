import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Area } from '../../interfaces/area.interface';
import { AreaService } from '../../services/area.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-area-delete',
  templateUrl: './area-delete.component.html',
  styles: [
  ]
})
export class AreaDeleteComponent implements OnInit {

  id: number = 0;
  nombre: string="";

  constructor(
    private router: Router,
    private service: AreaService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: Area) =>{
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
          this.router.navigate(["/parameters/area-read"]);
        }
      });
    }

  }


