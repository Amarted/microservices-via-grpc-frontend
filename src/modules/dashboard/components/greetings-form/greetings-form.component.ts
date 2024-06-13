import {
  Component, EventEmitter, Output,
} from '@angular/core';

@Component({
  selector: 'app-greetings-form',
  templateUrl: './greetings-form.component.html',
  styleUrl: './greetings-form.component.sass',
})
export class NameFormComponent {
  @Output()
  public formSubmitted = new EventEmitter<string>();
  public username = '';

  public onFormSubmitClick(): void {
    this.formSubmitted.emit(this.username);
  }
}
