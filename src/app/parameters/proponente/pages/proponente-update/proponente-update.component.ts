import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Proponente } from '../../interfaces/proponente.interface';
import { ProponenteService } from '../../services/proponente.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-proponente-update',
  templateUrl: './proponente-update.component.html',
  styleUrls: ['./proponente-update.component.css']
})
export class ProponenteUpdateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProponenteService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
    id: ["",[Validators.required]], 
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

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: Proponente) =>{
         this.GetDF["id"].setValue(data.id);
         this.GetDF["documento"].setValue(data.documento);
         this.GetDF["primer_nombre"].setValue(data.primer_nombre);
         this.GetDF["otros_nombres"].setValue(data.otros_nombres);
         this.GetDF["primer_apellido"].setValue(data.primer_apellido);
         this.GetDF["segundo_apellido"].setValue(data.segundo_apellido);
         this.GetDF["correo"].setValue(data.correo);
         this.GetDF["celular"].setValue(data.celular);
       }
     });
  }


  SaveRecord(){
  
      let model = new Proponente();
      model.id= this.GetDF["id"].value;
      model.primer_nombre= this.GetDF["primer_nombre"].value;
      model.otros_nombres= this.GetDF["otros_nombres"].value;
      model.primer_apellido= this.GetDF["primer_apellido"].value;
      model.correo= this.GetDF["correo"].value;
      model.celular= this.GetDF["celular"].value;
      this.service.EditRecord(model).subscribe({
        next: (data: Proponente) =>{
          showGeneralMessage(configurations.UPDATED_MESSAGE);
          this.router.navigate(["/parameters/proponente-read"]);
        }
      });
    }

}
