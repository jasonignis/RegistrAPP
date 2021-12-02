import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { LoginPage } from '../login/login.page';
import { LoginI } from '../modeloInterface/login.interface';
import { ResponseI } from '../modeloInterface/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { retry,catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  httpOptions = {
    headers : new HttpHeaders ({
      'Content-Type': 'application/json',
      'Acces-Control-Allow-Origin': '*'
    })


  }




  //Url de api a consumir
  apiURL:string="http://127.0.0.1:8000/api/usuarios/";

  constructor(private http: HttpClient) { }

    //GET sin filtrar
    getUsuarios():Observable<any>{
      return this.http.get(this.apiURL).pipe(
      retry(3)
      );
      }
      
    //GET filtrar por usuario
    getUsuariosMail():Observable<any>{
      return this.http.get(this.apiURL).pipe(
      retry(3)
      );
      }   
    //POST  
    postUsuarios(usuario):Observable<any>{
      return this.http.post(this.apiURL,usuario).pipe(retry(3));
      }  


    //PUT  
    updateUsuarios(id,post):Observable<any>{
      return this.http.put(this.apiURL+id,post).pipe(retry(3));
      }


    //Delete  
    deleteUsuarios(id):Observable<any>{
      return this.http.delete(this.apiURL+'/posts/'+id);
      }   
      
    



}
