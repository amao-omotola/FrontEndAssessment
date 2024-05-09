import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CompleteMaterialModule } from '../../../shared/angular-material-module';
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
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  menuT() {
    this.menuToggled=true
  }
}
