import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private env:any = environment;



  constructor(private http: HttpClient){}


  private urlGetAccount = "https://apirest-banco-production.up.railway.app/login/useraccount"

  private urlGetTypeAccount = "https://apirest-banco-production.up.railway.app/login/useraccountype"

  private urltGetTransaccion = "https://apirest-banco-production.up.railway.app/login/transferirmonto"

  private urlGetMovimientos = "https://apirest-banco-production.up.railway.app/login/getusermoves"

  private urlDynamicGetkey= "https://apirest-banco-production.up.railway.app/login/getdinamicpass"


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

  public getDynamicKey(expresion: any){
    return this.http.post<any>(this.urlDynamicGetkey, expresion)
  }
}
