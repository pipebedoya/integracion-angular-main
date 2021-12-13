import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Facultad } from '../interfaces/facultad.interface';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   GetRecordList(): Observable<Facultad[]>{
     return this.http.get<Facultad[]>(`${this.url}/facultades`);
   }

   SearchRecord(id:number): Observable<Facultad>{
    return this.http.get<Facultad>(`${this.url}/facultades/${id}`);
  }
 
   SaveRecord(data: Facultad): Observable<Facultad>{
    return this.http.post<Facultad>(`${this.url}/facultades`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: Facultad): Observable<Facultad>{
    return this.http.put<Facultad>(`${this.url}/facultades/${data.id}`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}/facultades/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }


}
