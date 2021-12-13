import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Vinculacion } from '../../interfaces/vinculacion.interface';
import { VinculacionService } from '../../services/vinculacion.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-vinculacion-create',
  templateUrl: './vinculacion-create.component.html',
  styleUrls: ['./vinculacion-create.component.css']
})
export class VinculacionCreateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: VinculacionService)
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
      let model = new Vinculacion();
      model.nombre= this.GetDF["nombre"].value;
      this.service.SaveRecord(model).subscribe({
        next: (data: Vinculacion) =>{
          showGeneralMessage(configurations.SAVE_MESSAGE);
          this.router.navigate(["/parameters/vinculacion-read"]);
        }
      });
    }

  }

}
