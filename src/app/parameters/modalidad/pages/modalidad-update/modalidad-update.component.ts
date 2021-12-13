import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { ModalidadService } from '../../services/modalidad.service';
import { Modalidad } from '../../interfaces/modalidad.interface';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-modalidad-update',
  templateUrl: './modalidad-update.component.html',
  styleUrls: ['./modalidad-update.component.css']
})
export class ModalidadUpdateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ModalidadService,
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
       next: (data: Modalidad) =>{
         this.GetDF["id"].setValue(data.id);
         this.GetDF["nombre"].setValue(data.nombre);
       }
     });
  }


  SaveRecord(){
  
      let model = new Modalidad();
      model.nombre= this.GetDF["nombre"].value;
      model.id= this.GetDF["id"].value;
      this.service.EditRecord(model).subscribe({
        next: (data: Modalidad) =>{
          showGeneralMessage(configurations.UPDATED_MESSAGE);
          this.router.navigate(["/parameters/modalidad-read"]);
        }
      });
    }
     

}
