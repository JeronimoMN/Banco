import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  private urlCreateClient = "http://localhost:8000/login/crearcliente"
  private urlCreateAccount = "http://localhost:8000/login/crearcuenta"

  public createClient (expresion: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urlCreateClient, expresion, { headers: headers, responseType: 'text' })
  }

  public createAccount(expresion:any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urlCreateAccount, expresion, { headers: headers, responseType: 'text' })
  }
}
