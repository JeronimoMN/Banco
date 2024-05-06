import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferFormService {

  constructor(private http: HttpClient) { }


  private urlGetTypeAccount = 'http://localhost:8000/login/useraccountype'

  private urtGetTransaccion = 'http://localhost:8000/login/transferirmonto'


  public getTypeAccount(expresion: any){
    return this.http.post(this.urlGetTypeAccount, expresion)
  }

  public getTransaccion(expresion: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urtGetTransaccion, expresion, { headers: headers, responseType: 'text' })
  }
}
