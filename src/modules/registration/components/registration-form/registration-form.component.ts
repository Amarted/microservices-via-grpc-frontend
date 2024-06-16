import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export interface RegistrationFormData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.sass',
})
export class RegistrationFormComponent {
  @Input()
  public errorMessage: string | null = null;
  @Output()
  public formSubmitted = new EventEmitter<RegistrationFormData>();
  public username = '';
  public password = '';
  public repeatedPassword = '';
  public passwordsMatch = true;

  public onFormSubmitClick(): void {
    this.passwordsMatch = this.password === this.repeatedPassword;

    if (this.passwordsMatch) {
      this.formSubmitted.emit({
        username: this.username,
        password: this.password,
      });
    }
  }

  public clearPasswordErrors(): void {
    this.passwordsMatch = true;
  }

  public clearUsernameErrors(): void {
    this.errorMessage = null;
  }
}
