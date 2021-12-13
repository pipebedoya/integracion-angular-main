import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Comite } from '../interfaces/comite.interface';

@Injectable({
  providedIn: 'root'
})
export class ComiteService {

  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   GetRecordList(): Observable<Comite[]>{
     return this.http.get<Comite[]>(`${this.url}/Comites`);
   }

   SearchRecord(id:number): Observable<Comite>{
    return this.http.get<Comite>(`${this.url}/Comites/${id}`);
  }
 
   SaveRecord(data: Comite): Observable<Comite>{
    return this.http.post<Comite>(`${this.url}/Comites`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: Comite): Observable<Comite>{
    return this.http.put<Comite>(`${this.url}/Comites/${data.id}`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}/Comites/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

}
