import { Component, OnInit } from '@angular/core';
import { Jurado } from '../../interfaces/jurado.interface';
import { JuradoService } from '../../services/jurado.service';

@Component({
  selector: 'app-jurado-read',
  templateUrl: './jurado-read.component.html',
  styleUrls: ['./jurado-read.component.css']
})
export class JuradoReadComponent implements OnInit {

  recordList: Jurado[]= [];

  constructor(private service: JuradoService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: Jurado[]) => {
         this.recordList = data;
      }
    });
  }

}
