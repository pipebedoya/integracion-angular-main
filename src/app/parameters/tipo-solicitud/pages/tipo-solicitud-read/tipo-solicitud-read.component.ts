import { Component, OnInit } from '@angular/core';
import { TipoSolicitud } from '../../interfaces/tipo-solicitud.interface';
import { TipoSolicitudService } from '../../services/tipo-solicitud.service';

@Component({
  selector: 'app-tipo-solicitud-read',
  templateUrl: './tipo-solicitud-read.component.html',
  styleUrls: ['./tipo-solicitud-read.component.css']
})
export class TipoSolicitudReadComponent implements OnInit {

  recordList: TipoSolicitud[]= [];

  constructor(private service: TipoSolicitudService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: TipoSolicitud[]) => {
         this.recordList = data;
      }
    });
  }

}
