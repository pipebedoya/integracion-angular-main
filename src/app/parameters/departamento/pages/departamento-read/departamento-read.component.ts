import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../interfaces/departamento.interface';
import { DepartamentoService } from '../../services/departamento.service';

@Component({
  selector: 'app-departamento-read',
  templateUrl: './departamento-read.component.html',
  styleUrls: ['./departamento-read.component.css']
})
export class DepartamentoReadComponent implements OnInit {

  recordList: Departamento[]= [];

  constructor(private service: DepartamentoService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: Departamento[]) => {
         this.recordList = data;
      }
    });
  }
}
