import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RequestService } from 'src/app/requests/services/request.service';
import { Solicitud } from '../../interfaces/request.interface';
import { UploadedFile } from '../../interfaces/uploaded.file.interface';


@Component({
  selector: 'app-request-read',
  templateUrl: './request-read.component.html',
  styleUrls: ['./request-read.component.css']
})
export class RequestReadComponent implements OnInit {

  recordList: Solicitud[]= [];
  

  constructor(private service: RequestService,
    ) { }

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

  download(trabajo: string): void {
    this.service
      .download(trabajo)
      .subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = 'archive.pdf';
        a.click();
        URL.revokeObjectURL(objectUrl);
      })
  }


}

