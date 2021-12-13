import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/requests/services/request.service';
import { Solicitud } from '../../interfaces/request.interface';

@Component({
  selector: 'app-request-read',
  templateUrl: './request-read.component.html',
  styleUrls: ['./request-read.component.css']
})
export class RequestReadComponent implements OnInit {

  recordList: Solicitud[]= [];

  constructor(private service: RequestService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: Solicitud[]) => {
         this.recordList = data;
      }
    });
  }
}
