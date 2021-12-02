import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { empty } from 'rxjs';
import { LoginI } from '../modeloInterface/login.interface';
import {UsuariosService} from '../services/usuarios.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}
  lista(){

    this.router.navigate(['/lista']);
    
  }
}
