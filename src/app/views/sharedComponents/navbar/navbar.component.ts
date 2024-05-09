import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CompleteMaterialModule } from '../../../shared/angular-material-module';
import { TokenService } from '../../../services/auth/token.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule, 
    CompleteMaterialModule,
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuToggled:boolean = false
  opened = true;
  isNavbarCollapsed = false;
  constructor(
    private tokenService:TokenService
  ){}
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  menuT() {
    this.menuToggled=true
  }
  clearToken(){
    this.tokenService.deleteAll();
  }
}
