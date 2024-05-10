import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransferFormService } from './transfer-form.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transfer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [TransferFormService],
  templateUrl: './transfer-form.component.html',
  styleUrl: './transfer-form.component.css'
})
export class TransferFormComponent {
  private env:any = environment;

  data: any[] = [];

  constructor(private transforService: TransferFormService, private router: Router){}

  obtenerTipoCuenta(){
    this.transforService.getTypeAccount({'nombreUsuario': this.env.user}).subscribe(
      (response: any) =>{
        console.log(response)
        this.data = response.map((row:[cuenta:string, tipo:string]): any => ({
          cuenta: row[0],
          tipo: row[1]
        }));
          console.log(this.data)
          return this.data
        }, (error) =>{
        console.log(error)        
      }
    )
  }

  ngOnInit(){
    this.obtenerTipoCuenta()
  } 

  get cuenta(){
    return this.transferForm.get('cuenta') as FormControl
  }

  get cuentaDestino(){
    return this.transferForm.get('cuentaDestino') as FormControl
  }

  get monto(){
    return this.transferForm.get('monto') as FormControl
  }


  transferForm = new FormGroup({
    'cuenta': new FormControl('', [Validators.required,]),
    'cuentaDestino': new FormControl('', [Validators.required]),
    'monto': new FormControl('', [Validators.required])
  })




  onSubmit(){
      this.transforService.getTransaccion({'cuenta': this.transferForm.value.cuenta?.split(/\s(.+)/)[0], 'cuentaDestino': this.transferForm.value.cuentaDestino, 'monto': this.transferForm.value.monto}).subscribe(
        (response: any)=> {
          if(response == "Valido"){
            Swal.fire({
              title: 'Transacción Exitosa',
              icon: 'success',
              timer:2000,
            }).then(() => {
              this.router.navigate(['/client'])
            })
          }
            console.log(response)
        }, (error) => {
          console.log(error)
          Swal.fire({
            title: "Error",
            text: "Hubo un problema, intentelo más tarde",
            icon: "error"
          })
        }
      )
  }
}
