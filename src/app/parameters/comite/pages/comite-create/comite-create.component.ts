import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Comite } from '../../interfaces/comite.interface';
import { ComiteService } from '../../services/comite.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-comite-create',
  templateUrl: './comite-create.component.html',
  styleUrls: ['./comite-create.component.css']
})
export class ComiteCreateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ComiteService)
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
      let model = new Comite();
      model.nombre= this.GetDF["nombre"].value;
      this.service.SaveRecord(model).subscribe({
        next: (data: Comite) =>{
          showGeneralMessage(configurations.SAVE_MESSAGE);
          this.router.navigate(["/parameters/comite-read"]);
        }
      });
    }

  }
}
