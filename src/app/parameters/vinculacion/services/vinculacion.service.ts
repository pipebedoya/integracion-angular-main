import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Vinculacion } from '../interfaces/vinculacion.interface';

@Injectable({
  providedIn: 'root'
})
export class VinculacionService {

  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   GetRecordList(): Observable<Vinculacion[]>{
     return this.http.get<Vinculacion[]>(`${this.url}/tipovinculaciones`);
   }

   SearchRecord(id:number): Observable<Vinculacion>{
    return this.http.get<Vinculacion>(`${this.url}/tipovinculaciones/${id}`);
  }
 
   SaveRecord(data: Vinculacion): Observable<Vinculacion>{
    return this.http.post<Vinculacion>(`${this.url}/tipovinculaciones`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: Vinculacion): Observable<Vinculacion>{
    return this.http.put<Vinculacion>(`${this.url}/tipovinculaciones/${data.id}`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}/tipovinculaciones/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

}
