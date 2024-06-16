import { Component } from '@angular/core';
import { AuthApiService } from '../../../application/services/auth-api/AuthApiService';
import { RegistrationFormData } from '../registration-form/registration-form.component';
import { AccessService } from '../../../application/services/AccessService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.sass',
})
export class RegistrationComponent {
  public errorMessage: string | null = null;

  public constructor(
    private authApi: AuthApiService,
    private accessService: AccessService,
    private router: Router,
  ) {}

  public async registration(data: RegistrationFormData): Promise<void> {
    this.errorMessage = null;
    const response = await this.authApi.registration(data);
    if (response.status === 'failed') {
      this.errorMessage = response.errorMessage;
    } else {
      this.accessService.authorize(response.response.accessToken);
      await this.router.navigate([
        '',
      ]);
    }
  }

}
