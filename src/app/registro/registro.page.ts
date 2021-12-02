import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //declaro variable tipo FomrGroup
  //formularioRegistro: FormGroup;


  constructor(private api : UsuariosService, private formBuilder: FormBuilder) {}

  formularioRegistro = this.formBuilder.group({
    correo:['',[Validators.required]],
    password:['',[Validators.required]]
  });




   crearUsuario(){
    var usuario = this.formularioRegistro.value;

    this.api.postUsuarios(usuario).subscribe((res)=>{
      console.log(res[0]);
    }, (error)=>{
      console.log(error);
    });
     
   }

  

  ngOnInit() {
  }

  validarCampos(){
    if(this.formularioRegistro['correo'] === '' ||  this.formularioRegistro['password'] === ''){
      console.log('Campos vacios')
    }
    else{
      
      this.crearUsuario();
    }
  
  }

}
