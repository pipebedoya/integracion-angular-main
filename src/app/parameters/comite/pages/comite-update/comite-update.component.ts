import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Comite } from '../../interfaces/comite.interface';
import { ComiteService } from '../../services/comite.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-comite-update',
  templateUrl: './comite-update.component.html',
  styleUrls: ['./comite-update.component.css']
})
export class ComiteUpdateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ComiteService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      id: ["",[Validators.required]], 
     nombre: ["",[Validators.required, Validators.nullValidator]]       
    });
   }

   get GetDF(){
     return this.dataForm.controls;
   }

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: Comite) =>{
         this.GetDF["id"].setValue(data.id);
         this.GetDF["nombre"].setValue(data.nombre);
       }
     });
  }


  SaveRecord(){
  
      let model = new Comite();
      model.nombre= this.GetDF["nombre"].value;
      model.id= this.GetDF["id"].value;
      this.service.EditRecord(model).subscribe({
        next: (data: Comite) =>{
          showGeneralMessage(configurations.UPDATED_MESSAGE);
          this.router.navigate(["/parameters/comite-read"]);
        }
      });
    }

}
