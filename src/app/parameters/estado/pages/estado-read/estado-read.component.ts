import { Component, OnInit } from '@angular/core';
import { Estado } from '../../interfaces/estado.interface';
import { EstadoService } from '../../services/estado.service';

@Component({
  selector: 'app-estado-read',
  templateUrl: './estado-read.component.html',
  styleUrls: ['./estado-read.component.css']
})
export class EstadoReadComponent implements OnInit {

  recordList: Estado[]= [];

  constructor(private service: EstadoService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: Estado[]) => {
         this.recordList = data;
      }
    });
  }

}
