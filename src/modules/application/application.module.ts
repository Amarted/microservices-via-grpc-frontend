import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRoutingModule } from './routing/routing.module';
import { ApplicationComponent } from './application.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationModule } from '../registration/registration.module';
import { AccessService } from './services/AccessService';
import { SignInModule } from '../sign-in/sign-in.module';

@NgModule({
  declarations: [
    ApplicationComponent,
  ],
  imports: [
    BrowserModule,
    ApplicationRoutingModule,
    NgbModule,
    RegistrationModule,
    SignInModule,
  ],
  providers: [
    AccessService,
  ],
  bootstrap: [
    ApplicationComponent,
  ],
})
export class ApplicationModule { }
