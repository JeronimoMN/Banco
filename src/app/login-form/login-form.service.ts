import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginFormComponent } from './login-form.component';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(private http: HttpClient) { }

  private urlGetUser= 'http://localhost:8000/login/validarUsuarioClave' 

  public getUser(expresion: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urlGetUser, expresion, { headers: headers, responseType: 'text' })
  }
}