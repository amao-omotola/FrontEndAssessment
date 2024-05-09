import { Component } from '@angular/core';
import { CompleteMaterialModule } from '../../shared/angular-material-module';

import { NavbarComponent } from '../sharedComponents/navbar/navbar.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    CompleteMaterialModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
