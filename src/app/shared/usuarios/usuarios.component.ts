import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HttpClientModule],
  providers: [SharedService],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios: any[] = [];

  constructor (private sharedService: SharedService) {

  }

  getUsers(){
    this.sharedService.getAllUsers().subscribe(data => {
      this.usuarios= [];
      data.forEach((element:any[]) => {

        this.usuarios.push({
          id_usuario: element[0],
          nombre_completo: element[1],
          nombre_user: element[2],
          tipo_usuario: element[3],
          estado_usuario: element[4]
        })
      });
      console.log(this.usuarios)
    })
  }

  ngOnInit(): void{
    this.getUsers()
  }
}