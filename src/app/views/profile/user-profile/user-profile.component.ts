import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProfileService } from '../../../services/profile/profile.service';
import { NotificationService } from '../../../shared/notification.service';
@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit{
  userInfo:any;
  profileForm: FormGroup;
  imagePath:any;
  spinner=false;
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private toaster: NotificationService
  ){
    this.profileForm = this.fb.group({
      last_name: ['', Validators.required],
      first_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      avatar: [''],
    });
  }
  
  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.profileService.getUser(2).subscribe({
      next:(res:any)=>{ 
        this.userInfo = res.data
        this.profileForm.patchValue({
          last_name: this.userInfo.last_name,
          first_name: this.userInfo.first_name,
          email: this.userInfo.email,
          avatar: this.userInfo.avatar,
        });
        this.imagePath= this.userInfo.avatar;
        this.toaster.showSuccess('Info Fetched successfully');
      },
      error: (err: any) => {
        this.toaster.showError(err)
      }
    })
  }
  onSubmit(){
    this.spinner=true;
    if(!this.profileForm.valid){
      this.spinner=false;
      this.profileForm.markAllAsTouched();
    }
    else{
      let name= this.profileForm.value.first_name;
      this.profileService.updateUser(2, name).subscribe({
        next:(res:any)=>{ 
          this.userInfo = res.data
          this.spinner=false;
          this.toaster.showSuccess('Profile Updated Successfully');
        },
        error: (err: any) => {
          this.toaster.showError(err)
          this.spinner=false;
        }
      })
    }
    
  }
}
