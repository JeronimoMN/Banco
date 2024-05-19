import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient){}


  private urlGetAccount = 'http://localhost:8000/login/useraccount'

  private urlGetTypeAccount = 'http://localhost:8000/login/useraccountype'

  private urltGetTransaccion = 'http://localhost:8000/login/transferirmonto'

  private urlGetMovimientos = 'http://localhost:8000/login/getusermoves'


  public getTypeAccount(expresion: any){
    return this.http.post(this.urlGetTypeAccount, expresion)
  }

  public getTransaccion(expresion: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urltGetTransaccion, expresion, { headers: headers, responseType: 'text' })
  }

  public getAccount(expresion: any) {
    return this.http.post(this.urlGetAccount, expresion)
  }

  public getMoves(expresion:any) {
    return this.http.post<any>(this.urlGetMovimientos, expresion)
  }
}
