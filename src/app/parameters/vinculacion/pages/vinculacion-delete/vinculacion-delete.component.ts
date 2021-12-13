import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Vinculacion } from '../../interfaces/vinculacion.interface';
import { VinculacionService } from '../../services/vinculacion.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-vinculacion-delete',
  templateUrl: './vinculacion-delete.component.html',
  styleUrls: ['./vinculacion-delete.component.css']
})
export class VinculacionDeleteComponent implements OnInit {

  id: number = 0;
  nombre: string="";

  constructor(
    private router: Router,
    private service: VinculacionService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: Vinculacion) =>{
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
          this.router.navigate(["/parameters/vinculacion-read"]);
        }
      });
    }
}
