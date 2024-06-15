import { Component } from '@angular/core';
import { AuthApiService } from '../../services/auth-api/AuthApiService';
import { RegistrationFormData } from '../registration-form/registration-form.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.sass',
})
export class RegistrationComponent {
  public errorMessage: string | null = null;

  public constructor(
    private authApi: AuthApiService,
  ) {}

  public async registration(data: RegistrationFormData): Promise<void> {
    const response = await this.authApi.registration(data);
    if (response.status === 'failed') {
      this.errorMessage = response.errorMessage;
    } else {
      this.errorMessage = null;
    }
  }

}
