import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import { DynamicComponent } from './client/dynamic/dynamic.component';
import { TransferFormComponent } from './client/transfer-form/transfer-form.component';

export const routes: Routes = [
    {path: 'login', component:LoginFormComponent},
    {path: 'main-page', component: MainPageComponent},
    {path: 'list-clients', component: ClientsComponent},
    {path: 'client', component: ClientComponent},
    {path: 'dynamic', component: DynamicComponent},
    {path: 'transfer', component: TransferFormComponent},

    
    {path: '', redirectTo: '/main-page', pathMatch:'full'},
    {path: '**', redirectTo: '/main-page', pathMatch:'full'},
];