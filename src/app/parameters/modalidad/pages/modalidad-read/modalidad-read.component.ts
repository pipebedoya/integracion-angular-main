import { Component, OnInit } from '@angular/core';
import { ModalidadService } from '../../services/modalidad.service';
import { Modalidad } from '../../interfaces/modalidad.interface';

@Component({
  selector: 'app-modalidad-read',
  templateUrl: './modalidad-read.component.html',
  styleUrls: ['./modalidad-read.component.css']
})
export class ModalidadReadComponent implements OnInit {

  recordList: Modalidad[]= [];

  constructor(private service: ModalidadService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: Modalidad[]) => {
         this.recordList = data;
      }
    });
  }
}
