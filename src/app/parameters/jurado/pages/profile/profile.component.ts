import { Component, OnInit } from '@angular/core';
import { Jurado } from '../../interfaces/jurado.interface';
import { JuradoService } from '../../services/jurado.service';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  recordList: Jurado[]= [];


  constructor(private service: JuradoService,
              private authService: AuthService ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }
  
  get usuario(){
    let jurado = this.authService .usuario.data?.rol;
    return jurado;
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: Jurado[]) => {
         this.recordList = data;
      }
    });
  }

    getRequest(){
     //this.service.RequestsJurado(this.usuario)
    }

}
