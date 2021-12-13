import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Departamento } from '../interfaces/departamento.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   GetRecordList(): Observable<Departamento[]>{
     return this.http.get<Departamento[]>(`${this.url}/departamentos`);
   }

   SearchRecord(id:number): Observable<Departamento>{
    return this.http.get<Departamento>(`${this.url}/departamentos/${id}`);
  }
 
   SaveRecord(data: Departamento): Observable<Departamento>{
    return this.http.post<Departamento>(`${this.url}/departamentos`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: Departamento): Observable<Departamento>{
    return this.http.put<Departamento>(`${this.url}/departamentos/${data.id}`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}/departamentos/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

}
