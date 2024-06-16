import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LayoutModule } from '../application/layout/layout.module';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { provideHttpClient } from '@angular/common/http';
import { RegistrationApiService } from './services/registration-api/RegistrationApiService';
import { RouterModule } from '@angular/router';

@NgModule({
  providers: [
    provideHttpClient(),
    RegistrationApiService,
  ],
  declarations: [
    RegistrationFormComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    RouterModule,
  ],
  exports: [
    RegistrationComponent,
  ],
})
export class RegistrationModule { }
