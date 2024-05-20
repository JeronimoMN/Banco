import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private env:any = environment;

  constructor(private http: HttpClient) { }


  private urlCreateClient = "https://apirest-banco-production.up.railway.app/login/crearcliente"
  private urlCreateAccount = "https://apirest-banco-production.up.railway.app/login/crearcuenta"
  private ultGetAllUsers = "https://apirest-banco-production.up.railway.app/login/getuserbanck"
  private ulrChangeStateAccount = "https://apirest-banco-production.up.railway.app/login/cambiarestado"
  private urlGetAllLogTrassacciones= "https://apirest-banco-production.up.railway.app/login/getlogstrans"
  private urlGetAllAccess = "https://apirest-banco-production.up.railway.app/login/getlogsaccess"

  public createClient (expresion: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urlCreateClient, expresion, { headers: headers, responseType: 'text' })
  }

  public createAccount(expresion:any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urlCreateAccount, expresion, { headers: headers, responseType: 'text' })
  }

  public getAllUsers(){
    return this.http.get<any>(this.ultGetAllUsers)
  }

  public changeStateAccount(expresion:any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.ulrChangeStateAccount, expresion, { headers: headers, responseType: 'text' })
  }

  public getAllLogsTransacciones(){
    return this.http.get<any>(this.urlGetAllLogTrassacciones)
  }

  public getAllLogsAccesos(){
    return this.http.get<any>(this.urlGetAllAccess)
  }
}
