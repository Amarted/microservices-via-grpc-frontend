import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRoutingModule } from './routing/routing.module';
import { ApplicationComponent } from './application.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ApplicationComponent,
  ],
  imports: [
    BrowserModule,
    ApplicationRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [
    ApplicationComponent,
  ],
})
export class ApplicationModule { }
