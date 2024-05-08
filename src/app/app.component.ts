import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CompleteMaterialModule } from './shared/angular-material-module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    CompleteMaterialModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontEndTest';
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
