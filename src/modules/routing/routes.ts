import { Routes } from '@angular/router';
import { DashboardPageComponent } from '../app/pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
];
