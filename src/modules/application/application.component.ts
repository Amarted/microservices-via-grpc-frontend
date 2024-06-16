import { Component } from '@angular/core';
import { AccessService } from './services/AccessService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
})
export class ApplicationComponent {
  public title = 'Client application';
  public constructor(
    private accessService: AccessService,
    private router: Router,
  ) {
    void this.initializeApplicaiton();
  }

  private async initializeApplicaiton(): Promise<void> {
    this.accessService.initialize();

    if (!this.accessService.isAuthorized()) {
      await this.router.navigate([
        'registration',
      ]);
    } else {
      await this.router.navigate([
        '',
      ]);
    }
  }
}
