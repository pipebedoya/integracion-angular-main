import { Component, OnInit } from '@angular/core';
import { Comite } from '../../interfaces/comite.interface';
import { ComiteService } from '../../services/comite.service';

@Component({
  selector: 'app-comite-read',
  templateUrl: './comite-read.component.html',
  styleUrls: ['./comite-read.component.css']
})
export class ComiteReadComponent implements OnInit {

  
  recordList: Comite[]= [];

  constructor(private service: ComiteService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: Comite[]) => {
         this.recordList = data;
      }
    });
  }
}
