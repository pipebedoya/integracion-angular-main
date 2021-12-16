import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Respuesta } from '../interfaces/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class RecibirRespuestaService {
  private  url: string = environment.juradoUrl;
  private tk: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService ) { 
    this.tk = this.localStorageService.getToken();
  }

   SaveRespuesta(data: Respuesta): Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.url}/solicitud-respuesta`,{
      fecha_respuesta:data.fecha_respuesta,
      codigo_solicitud:data.codigo_solicitud,
      respuesta:data.respuesta,
      observaciones:data.observaciones,
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }


  
}
