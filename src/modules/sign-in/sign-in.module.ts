import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../application/layout/layout.module';
import { RouterModule } from '@angular/router';
import { SignInApiService } from './services/sign-in-api/SignInApiService';

@NgModule({
  declarations: [
    SignInComponent,
    SignInFormComponent,
  ],
  providers: [
    SignInApiService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    RouterModule,
  ],
  exports: [
    SignInComponent,
  ],
})
export class SignInModule { }
