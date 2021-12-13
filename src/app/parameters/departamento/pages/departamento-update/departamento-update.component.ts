import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Departamento } from '../../interfaces/departamento.interface';
import { DepartamentoService } from '../../services/departamento.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-departamento-update',
  templateUrl: './departamento-update.component.html',
  styleUrls: ['./departamento-update.component.css']
})
export class DepartamentoUpdateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService,
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
       next: (data: Departamento) =>{
         this.GetDF["id"].setValue(data.id);
         this.GetDF["nombre"].setValue(data.nombre);
       }
     });
  }


  SaveRecord(){
  
      let model = new Departamento();
      model.nombre= this.GetDF["nombre"].value;
      model.id= this.GetDF["id"].value;
      this.service.EditRecord(model).subscribe({
        next: (data: Departamento) =>{
          showGeneralMessage(configurations.UPDATED_MESSAGE);
          this.router.navigate(["/parameters/departamento-read"]);
        }
      });
    }
     

}
