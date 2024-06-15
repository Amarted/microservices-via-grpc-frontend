import { Component } from '@angular/core';
import { LayoutModule } from '../../../layout/layout.module';
import { AuthModule } from '../../../../auth/auth.module';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  standalone: true,
  imports: [
    LayoutModule,
    AuthModule,
  ],
  styleUrl: './registration-page.component.sass',
})
export class RegistrationPageComponent {

}
