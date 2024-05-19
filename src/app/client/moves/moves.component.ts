import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-moves',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, NgbModule, FormsModule],
  providers: [ClientService, DatePipe],
  templateUrl: './moves.component.html',
  styleUrl: './moves.component.css'
})
export class MovesComponent {
  private env: any = environment;
  movimientos: any[] = [];
  cuentas: any[] = [];

  constructor(private clientService: ClientService, private datePipe: DatePipe) { }

  accountForm = new FormGroup({
    'cuenta': new FormControl('', [Validators.required,]),
    'fechaInicio': new FormControl('', [Validators.required]),
    'fechaFinal': new FormControl('', [Validators.required])
  })

  get cuenta() {
    return this.accountForm.get('cuenta') as FormControl
  }

  get fechaInicio() {
    return this.accountForm.get('fechaInicio') as FormControl
  }

  get fechaFinal() {
    return this.accountForm.get('fechaFinal') as FormControl
  }

  getAccount() {
    this.clientService.getTypeAccount({ 'nombreUsuario': this.env.user }).subscribe(
      (response: any) => {
        this.cuentas = response.map((row: [cuenta: string, tipo: string]): any => ({
          cuenta: row[0]
        }));
      }, (error) => {
        console.log(error)
      }
    )
  }

  getMovimientos() {
    this.convertirCampoFecha(this.fechaInicio)
    this.convertirCampoFecha(this.fechaFinal)

    this.clientService.getMoves({ 'cuenta': this.accountForm.value.cuenta, 'fechaInicio': this.accountForm.value.fechaInicio, 'fechaFinal': this.accountForm.value.fechaFinal }).
      subscribe(data => {
        this.movimientos = [];
        data.forEach((element: any[]) => {
          let fechaHoraISO = element[1]; // Obtiene la fecha/hora en formato ISO
          let partes = fechaHoraISO.split("T"); // Divide la cadena en fecha y hora
          let fechaParte = partes[0]; // Obtiene solo la parte de la fecha
          let horaParte = partes[1].split(".")[0];
          this.movimientos.push({
            monto: element[0],
            fecha: fechaParte,
            hora: horaParte
          })
        })
        console.log(this.movimientos)
    })
  }

  convertirCampoFecha(campo: FormControl) {
    if (campo.value !== null) {
      const objFecha = campo.value;
      const strFecha = this.datePipe.transform(new Date(objFecha.year, objFecha.month - 1, objFecha.day), 'yyyy-MM-dd');
      campo.setValue(strFecha);
    }
  }

  ngOnInit() {
    this.getAccount()
  }
}
