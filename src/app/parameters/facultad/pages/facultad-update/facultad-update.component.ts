import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Facultad } from '../../interfaces/facultad.interface';
import { FacultadService } from '../../services/facultad.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-facultad-update',
  templateUrl: './facultad-update.component.html',
  styleUrls: ['./facultad-update.component.css']
})
export class FacultadUpdateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: FacultadService,
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
       next: (data: Facultad) =>{
         this.GetDF["id"].setValue(data.id);
         this.GetDF["nombre"].setValue(data.nombre);
       }
     });
  }


  SaveRecord(){
  
      let model = new Facultad();
      model.nombre= this.GetDF["nombre"].value;
      model.id= this.GetDF["id"].value;
      this.service.EditRecord(model).subscribe({
        next: (data: Facultad) =>{
          showGeneralMessage(configurations.UPDATED_MESSAGE);
          this.router.navigate(["/parameters/facultad-read"]);
        }
      });
    }
     

}
