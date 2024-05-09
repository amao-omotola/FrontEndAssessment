import { Component } from '@angular/core';

import { CompleteMaterialModule } from '../../../shared/angular-material-module';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CompleteMaterialModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
