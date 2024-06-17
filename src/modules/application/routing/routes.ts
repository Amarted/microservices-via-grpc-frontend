import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    component: RegistrationPageComponent,
  },
  {
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
];
