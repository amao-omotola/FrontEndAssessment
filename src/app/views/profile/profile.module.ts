import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteMaterialModule } from '../../shared/angular-material-module';
import { RouterModule } from '@angular/router';

import { ProfileRoutingModule } from './profile-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProfileComponent } from './profile.component';
import { NavbarComponent } from '../sharedComponents/navbar/navbar.component';
@NgModule({
  declarations: [
    UserProfileComponent,
    UserManagementComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NavbarComponent,
    CompleteMaterialModule,
    RouterModule,
  ]
})
export class ProfileModule { }
