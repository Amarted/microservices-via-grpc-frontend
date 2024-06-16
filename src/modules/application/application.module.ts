import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRoutingModule } from './routing/routing.module';
import { ApplicationComponent } from './application.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from '../auth/auth.module';
import { AccessService } from './services/AccessService';

@NgModule({
  declarations: [
    ApplicationComponent,
  ],
  imports: [
    BrowserModule,
    ApplicationRoutingModule,
    NgbModule,
    AuthModule,
  ],
  providers: [
    AccessService,
  ],
  bootstrap: [
    ApplicationComponent,
  ],
})
export class ApplicationModule { }
