import { Component } from '@angular/core';
import { UserApiService } from '../../services/user-api/UserApiService';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.sass',
})
export class DashboardHomeComponent {
  public serverResponse: object | null = null;

  public constructor(
    private userApi: UserApiService,
  ) {}

  public async sendUsername(username: string): Promise<void> {
    this.serverResponse = await this.userApi.greetings({ username });
  }
}
