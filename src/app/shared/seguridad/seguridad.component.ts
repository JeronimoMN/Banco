import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SharedService } from '../shared.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-seguridad',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, HttpClientModule],
  providers: [SharedService], 
  templateUrl: './seguridad.component.html',
  styleUrl: './seguridad.component.css'
})
export class SeguridadComponent {
  logTransacciones: any[] = [];
  logAccesos: any[] = [];

  constructor(private sharedService: SharedService){}


  getLogsTransacciones(){
    this.sharedService.getAllLogsTransacciones().subscribe(data => {
      this.logTransacciones= [];
      data.forEach((element:any) => {
       this.logTransacciones.push({
        id: element.id,
        ...element
       })
      });
    })
  }

  getLogsAccesos(){
    this.sharedService.getAllLogsAccesos().subscribe(data => {
      this.logAccesos= [];
      data.forEach((element:any) => {
       this.logAccesos.push({
        id: element.id,
        ...element
       })
      });
    })
  }

  ngOnInit(): void{
    this.getLogsTransacciones()
    this.getLogsAccesos()
  }
}
