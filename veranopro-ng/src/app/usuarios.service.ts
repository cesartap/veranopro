import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsuarioSaveModel } from './models/ResponseUsuarioSave.model';
import { RequestUsuarioSaveModel } from './models/RequestUsuarioSave.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient ) {
    this.headers = new HttpHeaders();

  }

  getUsuario(parametros: RequestUsuarioSaveModel): Promise<any> {
    const promise =  this.http
      .get<ResponseUsuarioSaveModel>('https://0oqgwz9abb.execute-api.us-east-1.amazonaws.com/prod' + '/usuario/'+parametros.idUsuario, { headers: this.headers })
      .toPromise()
      .then(
        res => { // Success
          return res;
        }
      )
      .catch( error => { // Not Success
          return Promise.reject(error  || 'Server error');
      });
      return promise;
  }

  agregarUsuario(parametros: RequestUsuarioSaveModel): Promise<any> {
    const promise =  this.http
      .post<ResponseUsuarioSaveModel>('https://0oqgwz9abb.execute-api.us-east-1.amazonaws.com/prod' + '/usuario/', parametros, { headers: this.headers })
      .toPromise()
      .then(
        res => { // Success
          return res;
        }
      )
      .catch( error => { // Not Success
          return Promise.reject(error  || 'Server error');
      });
      return promise;
  }
}
