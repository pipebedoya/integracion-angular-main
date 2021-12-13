import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Modalidad } from '../interfaces/modalidad.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   GetRecordList(): Observable<Modalidad[]>{
     return this.http.get<Modalidad[]>(`${this.url}/modalidades`);
   }

   SearchRecord(id:number): Observable<Modalidad>{
    return this.http.get<Modalidad>(`${this.url}/modalidades/${id}`);
  }
 
   SaveRecord(data: Modalidad): Observable<Modalidad>{
    return this.http.post<Modalidad>(`${this.url}/modalidades`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: Modalidad): Observable<Modalidad>{
    return this.http.put<Modalidad>(`${this.url}/modalidades/${data.id}`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}/modalidades/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

}
