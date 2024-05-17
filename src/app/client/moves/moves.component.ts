import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-moves',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ClientService],
  templateUrl: './moves.component.html',
  styleUrl: './moves.component.css'
})
export class MovesComponent {
  private env:any = environment;
  movimientos: any[] = [];
  cuentas: any[] = [];

  constructor (private clientService: ClientService) { }

  accountForm = new FormGroup({
    'cuenta': new FormControl('', [Validators.required,]),
  })

  getAccount(){
    this.clientService.getTypeAccount({'nombreUsuario': this.env.user}).subscribe(
      (response:any)=>{
        this.cuentas = response.map((row:[cuenta:string, tipo:string]): any => ({
          cuenta: row[0]
        }));
      }, (error) =>{
        console.log(error)        
      }
    )
  }

  getMovimientos(){
    this.clientService.getMoves({'cuenta':this.accountForm.value.cuenta}).subscribe(
      (response:any)=>{

      }, (error) =>{
        console.log(error)        
      }
    )
  }
}
