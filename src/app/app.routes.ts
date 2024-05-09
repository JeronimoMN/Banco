import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ClientComponent } from './client/client.component';
import { DynamicComponent } from './client/dynamic/dynamic.component';
import { TransferFormComponent } from './client/transfer-form/transfer-form.component';
import { LoginTrabajadorComponent } from './login-trabajador/login-trabajador.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { CuentaComponent } from './shared/cuenta/cuenta.component';
import { ClienteComponent } from './shared/cliente/cliente.component';

export const routes: Routes = [
    {path: 'login', component:LoginFormComponent},
    {path: 'main-page', component: MainPageComponent},
    {path: 'client', component: ClientComponent},
    {path: 'dynamic', component: DynamicComponent},
    {path: 'transfer', component: TransferFormComponent},
    {path: 'login-trabajador', component:LoginTrabajadorComponent},
    {path: 'trabajador', component: TrabajadorComponent},
    {path: 'cuenta', component: CuentaComponent},
    {path: 'cliente', component: ClienteComponent},

    
    {path: '', redirectTo: '/main-page', pathMatch:'full'},
    {path: '**', redirectTo: '/main-page', pathMatch:'full'},
];