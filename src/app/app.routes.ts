import { Routes } from '@angular/router';
import { LoginComponent } from './views/register/login/login.component';
import { SignUpComponent } from './views/register/sign-up/sign-up.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signUp', component: SignUpComponent}
];
