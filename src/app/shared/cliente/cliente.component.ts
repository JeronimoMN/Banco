import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SharedService } from '../shared.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, HttpClientModule],
  providers: [SharedService],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  constructor(private router: Router, private sharedService: SharedService ){}


  get cedulaCliente(){
    return this.createClienteForm.get('cedulaCliente') as FormControl
  }

  get nombreCliente(){
    return this.createClienteForm.get('nombresCliente') as FormControl
  }

  get apellidoCliente(){
    return this.createClienteForm.get('apellidosCliente') as FormControl
  }

  get celularCliente(){
    return this.createClienteForm.get('celularCliente') as FormControl
  }

  get direccionCliente(){
    return this.createClienteForm.get('direccionCliente') as FormControl
  }

  get nombreUsuario(){
    return this.createClienteForm.get('nombreUsuario') as FormControl
  }

  get claveCuenta(){
    return this.createClienteForm.get('claveCliente') as FormControl
  }

  createClienteForm = new FormGroup({
    'cedulaCliente': new FormControl('', [Validators.required]),
    'nombresCliente': new FormControl('', [Validators.required]),
    'apellidosCliente': new FormControl('', [Validators.required]),
    'celularCliente': new FormControl('', [Validators.required]),
    'direccionCliente': new FormControl('', [Validators.required]),
    'nombreUsuario': new FormControl('', [Validators.required]),
    'claveCliente': new FormControl('', [Validators.required])
  })

  onSubmit(){
    this.sharedService.createClient({'cedulaCliente': this.createClienteForm.value.cedulaCliente,'nombresCliente': this.createClienteForm.value.nombresCliente,
     'apellidosCliente': this.createClienteForm.value.apellidosCliente, 'celularCliente': this.createClienteForm.value.celularCliente, 
     'direccionCliente': this.createClienteForm.value.direccionCliente, 'nombreUsuario': this.createClienteForm.value.nombreUsuario, 'claveCliente': this.createClienteForm.value.claveCliente}).subscribe(
      (response: any) =>{
        if(response){
          console.log(response)
          Swal.fire({
            title: 'Cliente Creado',
            text: 'Creación Exitosa',
          })
        }
      }, (error) =>{
        console.log(error)
        Swal.fire({
          title: "Datos incorrectos",
          text: "Vuelve a ingresar los datos",
          icon: "error"
        })
        this.createClienteForm.reset();
        
      }
    )
  }
}
