import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ClientService } from './client.service';
import { environment } from '../../environments/environment.development';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HttpClientModule],
  providers: [ClientService],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})

export class ClientComponent {
  private env:any = environment;

  data: any[] = [];

  constructor(private clientService: ClientService){}

  obtenerCuenta(){
    this.clientService.getAccount({'nombreUsuario': this.env.user}).subscribe(
      (response: any) =>{
        console.log(response)
        this.data = response.map((row:[cuenta:string, monto:string]): any => ({
          cuenta: row[0],
          monto: row[1]
        }));
          console.log(this.data)
          return this.data
        }, (error) =>{
        console.log(error)        
      }
    )
  }

  ngOnInit(){
    this.obtenerCuenta()
  } 
}