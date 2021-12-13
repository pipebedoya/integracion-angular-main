import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import * as cryptoJS from 'crypto-js';
import { LocalStorageService } from '../../../services/local-storage.service';
import { configurations } from 'src/app/config/configurations';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    usuario:['',[Validators.required,Validators.email,Validators.minLength(configurations.EMAIL_MIN_LENGTH)]],
    clave: ['',[Validators.required, Validators.minLength(configurations.PASSWORD_MIN_LENGTH)]]
  });

  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router,
               private localStorageService : LocalStorageService) { }

  ngOnInit( ): void {
  }


  login(){

 
    let clave = cryptoJS.MD5(this.miFormulario.get('clave')?.value).toString();
    const usuario = this.miFormulario.get('usuario')?.value;
    
    this.authService.login( usuario, clave)
      .subscribe( okey => {
        //console.log('aqui hay un error',okey);
        // undefined let saved = this.localStorageService.saveSessionData(okey)
        //console.log('antes',okey);
        if(okey===true){
          //console.log('despues de okey ',okey);
          this.router.navigateByUrl('/dashboard')
        }else{
          Swal.fire(
            'Error',
            okey,
            'error'
            /* {
            title: 'Error!',
            text: 'error',
            icon: 'error',
            confirmButtonText: 'Confirmar'
          } */)
        
        }
      })




    
    //console.log(this.miFormulario.value);
    //const {usuario, clave} = this.miFormulario.value;
    //console.log('login user',usuario);
    //console.log('login pass',clave);
    //console.log(cryptoJS.MD5('hola').toString());;
    

  }

}
