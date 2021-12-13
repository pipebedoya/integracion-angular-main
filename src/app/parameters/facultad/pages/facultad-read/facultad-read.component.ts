import { Component, OnInit } from '@angular/core';
import { Facultad } from '../../interfaces/facultad.interface';
import { FacultadService } from '../../services/facultad.service';

@Component({
  selector: 'app-facultad-read',
  templateUrl: './facultad-read.component.html',
  styleUrls: ['./facultad-read.component.css']
})
export class FacultadReadComponent implements OnInit {

  recordList: Facultad[]= [];

  constructor(private service: FacultadService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: Facultad[]) => {
         this.recordList = data;
      }
    });
  }
}
