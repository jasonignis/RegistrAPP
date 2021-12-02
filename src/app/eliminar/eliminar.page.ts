import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  constructor(private api : UsuariosService, private formBuilder: FormBuilder) { }

  formularioId = this.formBuilder.group({
    id:['',[Validators.required]],
  });

  ngOnInit() {
  }

  eliminarUsuario(){

  }

}
