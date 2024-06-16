import { Component } from '@angular/core';
import { AccessService } from '../../../services/AccessService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.sass',
})
export class SidebarComponent {
  public constructor(
    private accessService: AccessService,
    private router: Router,
  ) { }

  public async logout(): Promise<void> {
    this.accessService.unauthorize();
    await this.router.navigate([
      '',
    ]);
  }
}
