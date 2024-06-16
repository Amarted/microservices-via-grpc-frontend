import { Component } from '@angular/core';
import { LayoutModule } from '../../../layout/layout.module';
import { RegistrationModule } from '../../../../registration/registration.module';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  standalone: true,
  imports: [
    LayoutModule,
    RegistrationModule,
  ],
  styleUrl: './registration-page.component.sass',
})
export class RegistrationPageComponent {

}
