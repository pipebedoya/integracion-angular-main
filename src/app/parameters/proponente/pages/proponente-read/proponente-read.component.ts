import { Component, OnInit } from '@angular/core';
import { Proponente } from '../../interfaces/proponente.interface';
import { ProponenteService } from '../../services/proponente.service';

@Component({
  selector: 'app-proponente-read',
  templateUrl: './proponente-read.component.html',
  styleUrls: ['./proponente-read.component.css']
})
export class ProponenteReadComponent implements OnInit {

  recordList: Proponente[]= [];

  constructor(private service: ProponenteService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: Proponente[]) => {
         this.recordList = data;
      }
    });
  }
}
