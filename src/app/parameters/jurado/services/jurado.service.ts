import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Jurado } from '../interfaces/jurado.interface';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {

  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   GetRecordList(): Observable<Jurado[]>{
     return this.http.get<Jurado[]>(`${this.url}/jurados`);
   }

   SearchRecord(id:number): Observable<Jurado>{
    return this.http.get<Jurado>(`${this.url}/jurados/${id}`);
  }
 
   SaveRecord(data: Jurado): Observable<Jurado>{
    return this.http.post<Jurado>(`${this.url}/jurados`,{
      nombre:data.nombre,
      correo:data.correo,
      celular:data.celular,
      entidad:data.entidad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: Jurado): Observable<Jurado>{
    return this.http.put<Jurado>(`${this.url}/jurados/${data.id}`,{
      nombre:data.nombre,
      correo:data.correo,
      celular:data.celular,
      entidad:data.entidad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}/jurados/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }


   RequestsJurado(id:number){
    return this.http.get<Jurado[]>(`${this.url}/jurados/${id}/?filter={"include":[{"relation":"juradoxsolicituds"}]}`);

   }


}
