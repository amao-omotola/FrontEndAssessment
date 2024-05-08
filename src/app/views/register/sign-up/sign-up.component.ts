import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';

import { CompleteMaterialModule } from '../../../shared/angular-material-module';
import { NotificationService } from '../../../shared/notification.service';
import { RegisterService } from '../../../services/auth/register.service';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterModule, 
    CompleteMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpForm = new FormGroup ({
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
