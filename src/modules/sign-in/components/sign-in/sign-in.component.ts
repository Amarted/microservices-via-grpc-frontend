import { Component } from '@angular/core';
import { SignInApiService } from '../../services/sign-in-api/SignInApiService';
import { AccessService } from '../../../application/services/AccessService';
import { Router } from '@angular/router';
import { SignInFormData } from '../sign-in-form/sign-in-form.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.sass',
})
export class SignInComponent {
  public errorMessage: string | null = null;

  public constructor(
    private signInApi: SignInApiService,
    private accessService: AccessService,
    private router: Router,
  ) {}

  public async signIn(data: SignInFormData): Promise<void> {
    this.errorMessage = null;
    const response = await this.signInApi.signIn(data);
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
