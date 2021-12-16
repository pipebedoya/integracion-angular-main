import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { TipoSolicitud } from '../../interfaces/tipo-solicitud.interface';
import { TipoSolicitudService } from '../../services/tipo-solicitud.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-tipo-solicitud-create',
  templateUrl: './tipo-solicitud-create.component.html',
  styleUrls: ['./tipo-solicitud-create.component.css']
})
export class TipoSolicitudCreateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoSolicitudService)
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
      let model = new TipoSolicitud();
      model.nombre= this.GetDF["nombre"].value;
      this.service.SaveRecord(model).subscribe({
        next: (data: TipoSolicitud) =>{
          showGeneralMessage(configurations.SAVE_MESSAGE);
          this.router.navigate(["/parameters/tipo-solicitud-read"]);
        }
      });
    }

  }


}
