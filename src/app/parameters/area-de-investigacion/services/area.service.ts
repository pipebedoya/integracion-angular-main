import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Area } from '../interfaces/area.interface';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   GetRecordList(): Observable<Area[]>{
     return this.http.get<Area[]>(`${this.url}/areainvestigaciones`);
   }

   SearchRecord(id:number): Observable<Area>{
    return this.http.get<Area>(`${this.url}/areainvestigaciones/${id}`);
  }
 
   SaveRecord(data: Area): Observable<Area>{
    return this.http.post<Area>(`${this.url}/areainvestigaciones`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: Area): Observable<Area>{
    return this.http.put<Area>(`${this.url}/areainvestigaciones/${data.id}`,{
      nombre:data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}/areainvestigaciones/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

}
