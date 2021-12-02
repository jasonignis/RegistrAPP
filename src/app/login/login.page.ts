import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { empty } from 'rxjs';
import { LoginI } from '../modeloInterface/login.interface';
import {UsuariosService} from '../services/usuarios.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mensaje: string="";
  formularioLogin = this.formBuilder.group({
    correo:['',[Validators.required]],
    password:['',[Validators.required]]
  });
  
  UsuarioLogin:LoginI[]=[];


  constructor(private api: UsuariosService, private formBuilder: FormBuilder, private router: Router) {
    
  }

  ngOnInit() {

    //this.api.getUsuarios().subscribe((info:LoginI) =>{
      //console.log(info.correo[0])
    //})
  }

  //traerUsuario(){
    //var usuario = this.formularioLogin.value;

    //this.api.getUsuariosMail().subscribe((datos)=>{
      //this.UsuarioLogin=datos;
      //console.log(this.UsuarioLogin);

      //if(datos != this.formularioLogin.value){
        //console.log('Credenciales incorrectas');

      //}
      

      //this.api.getUsuariosMail(usuario).subscribe((res)=>{
        //console.log(res[0]);
      //}, (error)=>{
        //console.log(error);
      

    //});


  
  logeo(){

    
      this.router.navigate(['/home']);
    
  }
  
  

}
