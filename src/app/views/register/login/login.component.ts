import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';

import { CompleteMaterialModule } from '../../../shared/angular-material-module';
import { NotificationService } from '../../../shared/notification.service';
import { RegisterService } from '../../../services/auth/register.service';
import { NavbarComponent } from '../../sharedComponents/navbar/navbar.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule, 
    CompleteMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NavbarComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup ({
    email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required,]),
  })
  hide = true;
  spinner= false;
  sendBtn= false;

  constructor(
    private registerService: RegisterService,
    private token: NotificationService,
    private route: Router,
  ){}

  submit(){
    console.log(this.loginForm.value);
    
    this.spinner = true;
    this.sendBtn = true;
    
    this.registerService.login(this.loginForm.value).subscribe(
      {
        next:(res: any) =>{
          this.spinner = false;
          this.token.showSuccess('Login Successfully');
          this.sendBtn = false;
          this.route.navigate(['/profile/users'])
        },
        error: (err: any)=> {
          
          this.spinner = false;
          this.sendBtn = false;
          this.token.showError(err)

        }
    }
    
  )
  }

  hidePassword(){
    if(this.hide){
      this.hide=false
    } else{
      this.hide= true
    }
  }
  get f(){
    return this.loginForm.controls;
  }
}
