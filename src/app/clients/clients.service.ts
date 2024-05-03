import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  private urlApiGetData= 'http://localhost:8000/login/getusers'

  public getDataService(): Observable<any>{
    return this.http.get<any>(this.urlApiGetData)
  }
}
