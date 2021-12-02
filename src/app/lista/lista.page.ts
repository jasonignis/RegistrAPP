import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginI } from '../modeloInterface/login.interface';
import {UsuariosService} from '../services/usuarios.service'
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})


export class ListaPage implements OnInit {
  
  listaUsuarios:any[]=[];

  constructor(private api:UsuariosService) {
    this.llenarLista()
   }

  ngOnInit() {
  }

  llenarLista(){
    this.api.getUsuarios().subscribe((datos)=>{
      this.listaUsuarios=datos;
    })

  }

}
