import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginTrabajadorService } from './login-trabajador.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import Swal from 'sweetalert2';
import { end } from '@popperjs/core';

@Component({
  selector: 'app-login-trabajador',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, HttpClientModule],
  providers: [LoginTrabajadorService],
  templateUrl: './login-trabajador.component.html',
  styleUrl: './login-trabajador.component.css'
})
export class LoginTrabajadorComponent {
  private env:any = environment;

  constructor(private router: Router, private loginTrabajadorService: LoginTrabajadorService){}

  get user(){
    return this.loginTrabajadorForm.get('nombreUsuario') as FormControl
  }

  get password(){
    return this.loginTrabajadorForm.get('claveCuenta') as FormControl
  }

  loginTrabajadorForm = new FormGroup ({
    'nombreUsuario': new FormControl('', [Validators.required]),
    'claveCuenta': new FormControl('', [Validators.required, Validators.minLength(4)])
  })



  onSubmit(){
    this.loginTrabajadorService.getUser({'nombreUsuario': this.loginTrabajadorForm.value.nombreUsuario, 'claveCuenta': this.loginTrabajadorForm.value.claveCuenta}).subscribe(
      (response: any) =>{
        console.log(response)
        if(response){
          Swal.fire({
            title: 'Cargando...',
            text: 'Bienvenido',
            timer:2000,
          }).then(() =>{
            this.env.worker = this.loginTrabajadorForm.value.nombreUsuario;
            if (response == 'administrador'){
              this.router.navigate(['/admin'])
            }else{
              this.router.navigate(['/trabajador'])
            }
          });
        }
      }, (error) =>{
        console.log(error)
        Swal.fire({
          title: "Datos incorrectos",
          text: "Vuelve a ingresar los datos",
          icon: "error"
        })
        this.loginTrabajadorForm.reset();
        
      }
    )
  }
}
