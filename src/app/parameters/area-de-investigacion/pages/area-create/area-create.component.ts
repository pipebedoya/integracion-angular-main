import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Area } from '../../interfaces/area.interface';
import { AreaService } from '../../services/area.service';
import { configurations } from 'src/app/config/configurations';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-area-create',
  templateUrl: './area-create.component.html',
  styleUrls: ['./area-create.component.css']
})
export class AreaCreateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AreaService)
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
      let model = new Area();
      model.nombre= this.GetDF["nombre"].value;
      this.service.SaveRecord(model).subscribe({
        next: (data: Area) =>{
          showGeneralMessage(configurations.SAVE_MESSAGE);
          this.router.navigate(["/parameters/area-read"]);
        }
      });
    }

  }

}
