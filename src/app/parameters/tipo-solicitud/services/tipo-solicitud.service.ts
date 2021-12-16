import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { TipoSolicitud } from '../interfaces/tipo-solicitud.interface';

@Injectable({
  providedIn: 'root'
})
export class TipoSolicitudService {

  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   GetRecordList(): Observable<TipoSolicitud[]>{
     return this.http.get<TipoSolicitud[]>(`${this.url}/tiposolicitudes`);
   }

   SearchRecord(id:number): Observable<TipoSolicitud>{
    return this.http.get<TipoSolicitud>(`${this.url}/tiposolicitudes/${id}`);
  }
 
   SaveRecord(data: TipoSolicitud): Observable<TipoSolicitud>{
    return this.http.post<TipoSolicitud>(`${this.url}/tiposolicitudes`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: TipoSolicitud): Observable<TipoSolicitud>{
    return this.http.put<TipoSolicitud>(`${this.url}/tiposolicitudes/${data.id}`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}/tiposolicitudes/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

}
