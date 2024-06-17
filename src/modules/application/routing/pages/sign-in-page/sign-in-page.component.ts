import { Component } from '@angular/core';
import { SignInModule } from '../../../../sign-in/sign-in.module';
import { LayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    SignInModule,
    LayoutModule,
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.sass',
})
export class SignInPageComponent {

}
