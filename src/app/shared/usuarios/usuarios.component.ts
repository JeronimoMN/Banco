import { Component, NgModule } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { concatMap, filter, map } from 'rxjs';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HttpClientModule, FormsModule],
  providers: [SharedService],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios: any[] = [];
  listDeliciousDishes = ['juan', 'marcos']; // Ejemplo de valores iniciales


  constructor (private sharedService: SharedService) { }

  getUsers(){
    this.sharedService.getAllUsers().subscribe(data => {
      this.usuarios= [];
      data.forEach((element:any[]) => {
        const nombreUsuario = element[1];
        this.usuarios.push({
          id_usuario: element[0],
          nombre_completo: element[1],
          nombre_user: element[2],
          tipo_usuario: element[3],
          estado_usuario: element[4]
        })

        if (this.listDeliciousDishes.includes(nombreUsuario)) {
          this.listDeliciousDishes.push(nombreUsuario);
        }

      });
      console.log('ListDeliciousDishes:', this.listDeliciousDishes);
      console.log(this.usuarios)
    })
  }
 
  cambiarEstadoCuenta(idUser: string, tipoUser: string, estadoUser: string) {

    if(estadoUser == 'activo'){
        this.sharedService.changeStateAccount({cedula: idUser, tipo_usuario: tipoUser, estado: 'bloqueado'}).subscribe(
          (response :any) => {
          console.log(response)
        }
      )
    }if(estadoUser == 'bloqueado'){
      this.sharedService.changeStateAccount({cedula: idUser, tipo_usuario: tipoUser, estado: 'activo'}).subscribe(
        (response :any) => {
          console.log(response)
        }
      )
    }

    this.getUsers()
  }


  ngOnInit(): void{
    this.getUsers()
  }
}