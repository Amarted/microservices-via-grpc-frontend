import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { provideHttpClient } from '@angular/common/http';
import { NameFormComponent } from './components/greetings-form/greetings-form.component';
import { FormsModule } from '@angular/forms';
import { UserApiService } from './services/user-api/UserApiService';

@NgModule({
  providers: [
    provideHttpClient(),
    UserApiService,
  ],
  declarations: [
    DashboardHomeComponent,
    NameFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DashboardHomeComponent,
  ],
})
export class DashboardModule { }
