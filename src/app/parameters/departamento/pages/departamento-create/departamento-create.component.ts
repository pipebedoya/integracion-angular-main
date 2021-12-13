import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Departamento } from '../../interfaces/departamento.interface';
import { DepartamentoService } from '../../services/departamento.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-departamento-create',
  templateUrl: './departamento-create.component.html',
  styleUrls: ['./departamento-create.component.css']
})
export class DepartamentoCreateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService)
    { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
     nombre: ["",[Validators.required, Validators.nullValidator]]       
    });
   }

   get GetDF(){
     return this.dataForm.controls;
   }


  SaveRecord(){
    if(this.dataForm.invalid){
      showGeneralMessage(configurations.INVALID_FORM_MESSAGE);
    }else{
      let model = new Departamento();
      model.nombre= this.GetDF["nombre"].value;
      this.service.SaveRecord(model).subscribe({
        next: (data: Departamento) =>{
          showGeneralMessage(configurations.SAVE_MESSAGE);
          this.router.navigate(["/parameters/departamento-read"]);
        }
      });
    }

  }


}
