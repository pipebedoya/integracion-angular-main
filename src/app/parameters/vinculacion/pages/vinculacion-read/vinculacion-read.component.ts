import { Component, OnInit } from '@angular/core';
import { Vinculacion } from '../../interfaces/vinculacion.interface';
import { VinculacionService } from '../../services/vinculacion.service';

@Component({
  selector: 'app-vinculacion-read',
  templateUrl: './vinculacion-read.component.html',
  styleUrls: ['./vinculacion-read.component.css']
})
export class VinculacionReadComponent implements OnInit {

  recordList: Vinculacion[]= [];

  constructor(private service: VinculacionService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: Vinculacion[]) => {
         this.recordList = data;
      }
    });
  }
}
