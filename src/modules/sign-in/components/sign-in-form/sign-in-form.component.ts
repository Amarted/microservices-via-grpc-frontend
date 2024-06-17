import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export interface SignInFormData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.sass',
})
export class SignInFormComponent {
  @Input()
  public errorMessage: string | null = null;
  @Output()
  public formSubmitted = new EventEmitter<SignInFormData>();
  public username = '';
  public password = '';

  public onFormSubmitClick(): void {
    this.formSubmitted.emit({
      username: this.username,
      password: this.password,
    });
  }
}
