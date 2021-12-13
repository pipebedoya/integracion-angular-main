import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { ModalidadService } from '../../services/modalidad.service';
import { Modalidad } from '../../interfaces/modalidad.interface';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-modalidad-create',
  templateUrl: './modalidad-create.component.html',
  styleUrls: ['./modalidad-create.component.css']
})
export class ModalidadCreateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ModalidadService)
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
      let model = new Modalidad();
      model.nombre= this.GetDF["nombre"].value;
      this.service.SaveRecord(model).subscribe({
        next: (data: Modalidad) =>{
          showGeneralMessage(configurations.SAVE_MESSAGE);
          this.router.navigate(["/parameters/modalidad-read"]);
        }
      });
    }

  }

}
