import { Component } from '@angular/core';
import { AuthApiService } from '../../services/auth-api/AuthApiService';
import { RegistrationFormData } from '../registration-form/registration-form.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.sass',
})
export class RegistrationComponent {
  public constructor(
    private authApi: AuthApiService,
  ) {}

  public async registration(data: RegistrationFormData): Promise<void> {
    await this.authApi.registration(data);
  }

}
