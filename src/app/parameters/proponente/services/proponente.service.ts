import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Proponente } from '../interfaces/proponente.interface';

@Injectable({
  providedIn: 'root'
})
export class ProponenteService {

  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   GetRecordList(): Observable<Proponente[]>{
     return this.http.get<Proponente[]>(`${this.url}/proponentes`);
   }

   SearchRecord(id:number): Observable<Proponente>{
    return this.http.get<Proponente>(`${this.url}/proponentes/${id}`);
  }
 
   SaveRecord(data: Proponente): Observable<Proponente>{
    return this.http.post<Proponente>(`${this.url}/proponentes`,{
      documento:data.documento,
      primer_nombre:data.primer_nombre,
      otros_nombres:data.otros_nombres,
      primer_apellido:data.primer_apellido,
      segundo_apellido:data.segundo_apellido,
      correo:data.correo,
      celular:data.celular,
      id_tipovinculacion:data.id_tipovinculacion
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: Proponente): Observable<Proponente>{
    return this.http.put<Proponente>(`${this.url}/proponentes/${data.id}`,{
      documento:data.documento,
      primer_nombre:data.primer_nombre,
      otros_nombres:data.otros_nombres,
      primer_apellido:data.primer_apellido,
      segundo_apellido:data.segundo_apellido,
      correo:data.correo,
      celular:data.celular,
      id_tipovinculacion: data.id_tipovinculacion
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}/proponentes/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }


}
