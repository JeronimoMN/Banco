import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive,],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  get user(){
    return this.loginForm.get('user') as FormControl
  }

  get password(){
    return this.loginForm.get('password') as FormControl
  }


  loginForm = new FormGroup ({
    'user': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required, Validators.minLength(4)])
  })



  onSubmit(){
    console.log(this.loginForm.value)
  }
}
