import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginFormService } from './login-form.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from '../../environments/environment.development';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, HttpClientModule],
  providers: [LoginFormService],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  private env:any = environment;

  constructor(private router: Router, private loginService: LoginFormService){}

  get user(){
    return this.loginForm.get('nombreUsuario') as FormControl
  }

  get password(){
    return this.loginForm.get('claveCuenta') as FormControl
  }

  loginForm = new FormGroup ({
    'nombreUsuario': new FormControl('', [Validators.required]),
    'claveCuenta': new FormControl('', [Validators.required, Validators.minLength(4)])
  })



  onSubmit(){
    console.log(this.env.link)
    this.loginService.getUser({'nombreUsuario': this.loginForm.value.nombreUsuario, 'claveCuenta': this.loginForm.value.claveCuenta}).subscribe(
      (response: any) =>{
        if(response){
          Swal.fire({
            title: 'Cargando...',
            text: 'Bienvenido',
            timer:2000,
          }).then(() =>{
            this.router.navigate(['/client'])
            this.env.user= this.loginForm.value.nombreUsuario;
          });
        }
      }, (error) =>{
        console.log(error)
        Swal.fire({
          title: "Datos incorrectos",
          text: "Vuelve a ingresar los datos",
          icon: "error"
        })
        this.loginForm.reset();
        
      }
    )
  }
}
