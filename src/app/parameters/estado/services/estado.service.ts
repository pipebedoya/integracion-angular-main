import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Estado } from '../interfaces/estado.interface';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   GetRecordList(): Observable<Estado[]>{
     return this.http.get<Estado[]>(`${this.url}/estados`);
   }

   SearchRecord(id:number): Observable<Estado>{
    return this.http.get<Estado>(`${this.url}/estados/${id}`);
  }
 
   SaveRecord(data: Estado): Observable<Estado>{
    return this.http.post<Estado>(`${this.url}/estados`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: Estado): Observable<Estado>{
    return this.http.put<Estado>(`${this.url}/estados/${data.id}`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}/estados/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }



}
