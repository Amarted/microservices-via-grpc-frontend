/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ApplicationModule } from './modules/application/application.module';

platformBrowserDynamic().bootstrapModule(ApplicationModule, { ngZoneEventCoalescing: true })
  .catch((err: unknown) => {
    console.error(err);
  });
