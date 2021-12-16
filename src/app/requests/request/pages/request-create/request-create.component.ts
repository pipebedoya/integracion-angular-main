import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { configurations } from 'src/app/config/configurations';
import { TipoSolicitud } from 'src/app/parameters/tipo-solicitud/interfaces/tipo-solicitud.interface';
import { TipoSolicitudService } from 'src/app/parameters/tipo-solicitud/services/tipo-solicitud.service';
import { Modalidad } from 'src/app/parameters/modalidad/interfaces/modalidad.interface';
import { ModalidadService } from 'src/app/parameters/modalidad/services/modalidad.service';
import { Area } from 'src/app/parameters/area-de-investigacion/interfaces/area.interface';
import { AreaService } from 'src/app/parameters/area-de-investigacion/services/area.service';
import { Estado } from 'src/app/parameters/estado/interfaces/estado.interface';
import { EstadoService } from 'src/app/parameters/estado/services/estado.service';
import { Proponente } from 'src/app/parameters/proponente/interfaces/proponente.interface';
import { ProponenteService } from 'src/app/parameters/proponente/services/proponente.service';
import { RequestService } from 'src/app/requests/services/request.service';
import { Solicitud } from '../../interfaces/request.interface';
import {FileUploadModule} from 'primeng/fileupload';
import { from, switchMap } from 'rxjs';
import { UploadedFile } from '../../interfaces/uploaded.file.interface';
import {ProponentexSolicitud} from 'src/app/requests/request/interfaces/proponentexsolicitud.interface';

declare const showGeneralMessage:any;
declare const InitSelect:any;

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({}); 
  documentForm:FormGroup = new FormGroup({});
  fecha: Date = new Date(); 

  typeRequestList: TipoSolicitud[] = [];
  modality: Modalidad[]=[];
  area: Area[]=[];
  estado: Estado[]=[];
  proponente: Proponente[]=[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RequestService,
    private typeRequestService: TipoSolicitudService,
    private modalityService: ModalidadService,
    private areaService: AreaService,
    private estadoService: EstadoService,
    private proponenteService: ProponenteService)
    { }

  ngOnInit(): void {
    this.FormBuilding();
    this.FormDocument();
    this.GetDataForSelects();
  }

  GetDataForSelects(){
    this.typeRequestService.GetRecordList().subscribe({
       next: (data: TipoSolicitud[])=>{
         this.typeRequestList=data;
         setTimeout(() => {
           InitSelect("seleTipoSoli");
         }, 100);     
       }
      });
      this.modalityService.GetRecordList().subscribe({
        next: (data: Modalidad[])=>{
          this.modality=data;
          setTimeout(() => {
            InitSelect("seleMod");
          }, 100);     
        }
       });
       this.areaService.GetRecordList().subscribe({
        next: (data: Area[])=>{
          this.area=data;
          setTimeout(() => {
            InitSelect("seleArea");
          }, 100);     
        }
       });
       this.estadoService.GetRecordList().subscribe({
        next: (data: Estado[])=>{
          this.estado=data;
          setTimeout(() => {
            InitSelect("seleEstado");
          }, 100);     
        }
       });
       this.proponenteService.GetRecordList().subscribe({
        next: (data: Proponente[])=>{
          this.proponente=data;
          setTimeout(() => {
            InitSelect("selePropo");
          }, 100);     
        }
       });
  }
  

  FormDocument(){
   this.documentForm= this.fb.group({
      file:["",[]]
     });
    }

  FormBuilding(){
    this.dataForm = this.fb.group({
    fecha_radicado:["",[Validators.required]],
    nombre_trabajo: ["",[Validators.required, Validators.nullValidator]],
    descripcion: ["",[Validators.required, Validators.nullValidator]],
    id_tiposolicitud: ["",[Validators.required, Validators.nullValidator]],
    id_modalidad: ["",[Validators.required, Validators.nullValidator]],
    id_areainvestigacion: ["",[Validators.required, Validators.nullValidator]],
    id_estado: ["",[Validators.required, Validators.nullValidator]],  
    trabajo:["",[Validators.required]],
    proponente:["",[Validators.required, Validators.nullValidator]]
    });
   }

   get GetDF(){
     return this.dataForm.controls;
   }


  SaveRecord(){
     if(this.dataForm.invalid){
       showGeneralMessage(configurations.INVALID_FORM_MESSAGE);
      }else{
      let model = new Solicitud();
      model.fecha_radicado=this.GetDF["fecha_radicado"].value;
      model.nombre_trabajo= this.GetDF["nombre_trabajo"].value;
      model.descripcion= this.GetDF["descripcion"].value;
      model.id_tiposolicitud= Number(this.GetDF["id_tiposolicitud"].value);
      model.id_modalidad= Number(this.GetDF["id_modalidad"].value);
      model.id_areainvestigacion= Number(this.GetDF["id_areainvestigacion"].value);
      model.id_estado= Number(this.GetDF["id_estado"].value);
      model.trabajo= this.GetDF["trabajo"].value;
      this.service.SaveRecord(model).subscribe({
        next: (data: Solicitud) =>{
          showGeneralMessage(configurations.SAVE_MESSAGE);
          this.router.navigate(["/requests/request-read"]);
        }
      });
      }
  }

  //  SaveProponente(solicitud: number, Proponent){
  //    let model= new ProponentexSolicitud();
  //     model.id_solicitud=


  //  }


  //Carga de Archivo

  UploadDocument(event:any) {
    if(event.target.files.length>0){
    const file = event.target.files[0]
     this.documentForm.controls["file"].setValue(file);
    }
    }

    SubmitFileToServer(){
     const form = new FormData();
     form.append("file", this.documentForm.controls["file"].value);
     this.service.UploadDocument(form).subscribe({
       next: (data: UploadedFile) =>{
          this.dataForm.controls["trabajo"].setValue(data.filename);
       }
     });
     }
   
      CargaArchivo(event:any){
        if(event.target.files.length>0){
          const file = event.target.files[0]
  
          }
        
      }

   

}
