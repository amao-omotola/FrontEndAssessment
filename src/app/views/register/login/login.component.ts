import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';

import { CompleteMaterialModule } from '../../../shared/angular-material-module';
import { NotificationService } from '../../../shared/notification.service';
import { RegisterService } from '../../../services/auth/register.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule, 
    CompleteMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup ({
    login : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required,]),
  })
  hide = true;
  spinner= false;

  submit(){

  }

  hidePassword(){
    if(this.hide){
      this.hide=false
    } else{
      this.hide= true
    }
  }
}
