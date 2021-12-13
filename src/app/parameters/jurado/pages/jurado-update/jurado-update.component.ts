import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { Jurado } from '../../interfaces/jurado.interface';
import { JuradoService } from '../../services/jurado.service';

declare const showGeneralMessage:any;

@Component({
  selector: 'app-jurado-update',
  templateUrl: './jurado-update.component.html',
  styleUrls: ['./jurado-update.component.css']
})
export class JuradoUpdateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradoService,
    private route:ActivatedRoute)
    { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      id: ["",[Validators.required]], 
      nombre: ["",[Validators.required, Validators.nullValidator]],
      correo: ["",[Validators.required, Validators.email, Validators.nullValidator]],
      celular:["",[Validators.required, Validators.nullValidator]],
      entidad:["",[Validators.required, Validators.nullValidator]]       
    });
   }

   get GetDF(){
     return this.dataForm.controls;
   }

  SearchRecord(){
    let id= this.route.snapshot.params["id"];
     this.service.SearchRecord(id).subscribe({
       next: (data: Jurado) =>{
         this.GetDF["id"].setValue(data.id);
         this.GetDF["nombre"].setValue(data.nombre);
         this.GetDF["correo"].setValue(data.correo);
         this.GetDF["celular"].setValue(data.celular);
         this.GetDF["entidad"].setValue(data.entidad);
       }
     });
  }


  SaveRecord(){
  
      let model = new Jurado();
      model.nombre= this.GetDF["nombre"].value;
      model.id= this.GetDF["id"].value;
      this.service.EditRecord(model).subscribe({
        next: (data: Jurado) =>{
          showGeneralMessage(configurations.UPDATED_MESSAGE);
          this.router.navigate(["/parameters/jurado-read"]);
        }
      });
    }
}
