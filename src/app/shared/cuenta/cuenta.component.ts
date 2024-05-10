import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SharedService } from '../shared.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, HttpClientModule],
  providers: [SharedService],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class CuentaComponent {
  constructor(private router: Router, private sharedService: SharedService ){}

  get cedulaCliente(){
    return this.createAccountForm.get('cedulaCliente') as FormControl
  }
  get tipoCuenta(){
    return this.createAccountForm.get('tipoCuenta') as FormControl
  }
  get montoIncial(){
    return this.createAccountForm.get('montoInicial') as FormControl
  }
  createAccountForm = new FormGroup({
    'cedulaCliente': new FormControl('', [Validators.required]),
    'tipoCuenta': new FormControl('', [Validators.required]),
    'montoInicial': new FormControl('', [Validators.required])
  })


  onSubmit(){
    this.sharedService.createAccount({'tipoCuenta': this.createAccountForm.value.tipoCuenta,'montoInicial': this.createAccountForm.value.montoInicial, 'cedulaCliente': this.createAccountForm.value.cedulaCliente}).subscribe(
      (response: any)=> {
        if(response == 'Agregado'){
          console.log(response)
          Swal.fire({
            title: 'Cliente Creado',
            text: 'Creación Exitosa',
            icon: 'success',
            timer:2000,
          }).then(()=>{
            this.router.navigate(['/trabajador'])
          })
        }
      }, (error) => {
        console.log(error)
        Swal.fire({
          title: "Datos incorrectos",
          text: "Vuelve a ingresar los datos",
          icon: "error"
        })
        this.createAccountForm.reset();
      }
    )
  }
}
