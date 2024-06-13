import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserApiService } from '../../services/user-api/UserApiService';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.sass',
})
export class DashboardHomeComponent {

  public constructor(
    private userApi: UserApiService,
  ) {}

  public async sendUsername(username: string): Promise<void> {
    /** @todo */
    console.log('send user name' + username);
    await this.userApi.sendUsername({ username });

  }
}
