import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ClientsService } from './clients.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, HttpClientModule],
  providers:[ClientsService],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  clientes: any[]= [];

  
  constructor(private clientService: ClientsService){}

  
  getClients(){
    this.clientService.getDataService().subscribe(data => {
      this.clientes= [];
      data.forEach((element:any) => {
        this.clientes.push({
          id_cliente: element.id_cliente,
          ...element
        })
      });
      console.log(this.clientes)
    })
  }
   


  ngOnInit(): void{
    this.getClients()
  }
}


