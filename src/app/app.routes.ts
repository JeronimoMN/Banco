import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ClientsComponent } from './clients/clients.component';

export const routes: Routes = [
    {path: 'login', component:LoginFormComponent},
    {path: 'main-page', component: MainPageComponent},
    {path: 'list-clients', component: ClientsComponent},

    
    {path: '', redirectTo: '/main-page', pathMatch:'full'},
    {path: '**', redirectTo: '/main-page', pathMatch:'full'},
];