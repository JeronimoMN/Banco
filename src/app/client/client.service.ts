import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginFormService } from '../login-form/login-form.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient){}


  private urlGetAccount = 'http://localhost:8000/login/useraccount'



  public getAccount(expresion: any) {
    return this.http.post(this.urlGetAccount, expresion)
  }
}
