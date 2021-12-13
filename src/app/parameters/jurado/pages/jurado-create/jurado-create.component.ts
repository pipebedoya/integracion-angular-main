import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Jurado } from '../../interfaces/jurado.interface';
import { JuradoService } from '../../services/jurado.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-jurado-create',
  templateUrl: './jurado-create.component.html',
  styleUrls: ['./jurado-create.component.css']
})
export class JuradoCreateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradoService)
    { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
     nombre: ["",[Validators.required, Validators.nullValidator]],
     correo: ["",[Validators.required, Validators.email, Validators.nullValidator]],
     celular:["",[Validators.required, Validators.nullValidator]],
     entidad:["",[Validators.required, Validators.nullValidator]]        
    });
   }

   get GetDF(){
     return this.dataForm.controls;
   }


  SaveRecord(){
    if(this.dataForm.invalid){
      showGeneralMessage(configurations.INVALID_FORM_MESSAGE);
    }else{
      let model = new Jurado();
      model.nombre= this.GetDF["nombre"].value;
      model.correo= this.GetDF["correo"].value;
      model.celular= this.GetDF["celular"].value;
      model.entidad= this.GetDF["entidad"].value;
      this.service.SaveRecord(model).subscribe({
        next: (data: Jurado) =>{
          showGeneralMessage(configurations.SAVE_MESSAGE);
          this.router.navigate(["/parameters/jurado-read"]);
        }
      });
    }

  }
}
