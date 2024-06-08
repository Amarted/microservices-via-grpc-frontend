import { Component } from '@angular/core';
import { DashboardModule } from '../../../../dashboard/dashboard.module';
import { LayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    LayoutModule,
    DashboardModule,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.sass',
})
export class DashboardPageComponent {

}
