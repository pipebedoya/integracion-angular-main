import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Proponente } from '../../interfaces/proponente.interface';
import { ProponenteService } from '../../services/proponente.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-proponente-create',
  templateUrl: './proponente-create.component.html',
  styleUrls: ['./proponente-create.component.css']
})
export class ProponenteCreateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProponenteService)
    { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
    documento: ["",[Validators.required, Validators.nullValidator]],
    primer_nombre: ["",[Validators.required, Validators.nullValidator]],
    otros_nombres: ["",[Validators.required, Validators.nullValidator]],
    primer_apellido: ["",[Validators.required, Validators.nullValidator]],
    segundo_apellido: ["",[Validators.required, Validators.nullValidator]],
    correo: ["",[Validators.required, Validators.email, Validators.nullValidator]],
    celular:["",[Validators.required, Validators.nullValidator]],        
    });
   }

   get GetDF(){
     return this.dataForm.controls;
   }


  SaveRecord(){
    if(this.dataForm.invalid){
      showGeneralMessage(configurations.INVALID_FORM_MESSAGE);
    }else{
      let model = new Proponente();
      model.documento= this.GetDF["documentos"].value;
      model.primer_nombre= this.GetDF["primer_nombre"].value;
      model.otros_nombres= this.GetDF["otros_nombres"].value;
      model.primer_apellido= this.GetDF["primer_apellido"].value;
      model.segundo_apellido= this.GetDF["segundo_apellido"].value;
      model.correo= this.GetDF["correo"].value;
      model.celular= this.GetDF["celular"].value;
      this.service.SaveRecord(model).subscribe({
        next: (data: Proponente) =>{
          showGeneralMessage(configurations.SAVE_MESSAGE);
          this.router.navigate(["/parameters/proponente-read"]);
        }
      });
    }

  }

}
