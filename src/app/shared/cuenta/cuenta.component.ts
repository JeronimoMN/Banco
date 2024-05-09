import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class CuentaComponent {


  createAccountForm = new FormGroup({

  })


  onSubmit(){
    
  }
}
