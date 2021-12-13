import { Component, OnInit } from '@angular/core';
import { Area } from '../../interfaces/area.interface';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-area-read',
  templateUrl: './area-read.component.html',
  styles: [
  ]
})
export class AreaReadComponent implements OnInit {

  recordList: Area[]= [];

  constructor(private service: AreaService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: Area[]) => {
         this.recordList = data;
      }
    });
  }

}
