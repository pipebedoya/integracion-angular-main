import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Solicitud } from '../request/interfaces/request.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   GetRecordList(): Observable<Solicitud[]>{
     return this.http.get<Solicitud[]>(`${this.url}/solicitudes`);
   }

   SearchRecord(id:number): Observable<Solicitud>{
    return this.http.get<Solicitud>(`${this.url}/solicitudes/${id}`);
  }
 
   SaveRecord(data: Solicitud): Observable<Solicitud>{
    return this.http.post<Solicitud>(`${this.url}/solicitudes`,{
      fecha_radicado:data.fecha_radicado,
      nombre_trabajo:data.nombre_trabajo,
      descripcion:data.descripcion,
      trabajo:data.trabajo,
      id_tiposolicitud:data.id_tiposolicitud,
      id_modalidad:data.id_modalidad,
      id_estado:data.id_estado,
      proponentexsolicituds: data.proponentexsolicituds
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: Solicitud): Observable<Solicitud>{
    return this.http.put<Solicitud>(`${this.url}/solicitudes/${data.id}`,{
      fecha_radicado:data.fecha_radicado,
      nombre_trabajo:data.nombre_trabajo,
      descripcion:data.descripcion,
      trabajo:data.trabajo,
      id_tiposolicitud:data.id_tiposolicitud,
      id_modalidad:data.id_modalidad,
      id_estado:data.id_estado
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}/solicitudes/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }



}
