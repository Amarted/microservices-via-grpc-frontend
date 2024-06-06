import { Component } from '@angular/core';
import { LayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    LayoutModule,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.sass',
})
export class DashboardPageComponent {

}
