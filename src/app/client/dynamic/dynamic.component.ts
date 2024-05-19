import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { ClientService } from '../client.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, HttpClientModule],
  providers: [ClientService],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
  private env:any = environment;

  constructor(private clientService: ClientService, private router: Router){}

  get dynamicKey(){
    return this.dynamicForm.value.dynamicKey
  }

  dynamicForm = new FormGroup({
    'dynamicKey': new FormControl('', [Validators.required])
  })

  onSubmit(){
    this.clientService.getDynamicKey({'nombreUsuario': this.env.user}).subscribe(
      (response: any) =>{
        
        if(this.dynamicForm.value.dynamicKey === response){
          this.router.navigate(['../transfer'])
          console.log('Good')
        }else{
          console.log('BAD')
        }
        }, (error) =>{
        console.log(error)        
      }
    )
  }
}