import { Routes } from '@angular/router';
import { LoginComponent } from './views/register/login/login.component';
import { SignUpComponent } from './views/register/sign-up/sign-up.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'home', component: LandingPageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signUp', component: SignUpComponent}
];
