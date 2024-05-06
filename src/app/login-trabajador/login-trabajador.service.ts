import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginTrabajadorService {

  constructor(private http: HttpClient) { }

  private urlGetUser= 'http://localhost:8000/login/validarUsuarioClaveTrabajador' 

  public getUser(expresion: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urlGetUser, expresion, { headers: headers, responseType: 'text' })
  }
}
