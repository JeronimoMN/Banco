import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginTrabajadorService {
  private env:any = environment;

  constructor(private http: HttpClient) { }

  private urlGetUser= "https://apirest-banco-production.up.railway.app/login/validarTrabajadorClave"

  public getUser(expresion: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urlGetUser, expresion, { headers: headers, responseType: 'text' })
  }
}
