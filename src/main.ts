/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './modules/app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, { ngZoneEventCoalescing: true })
  .catch((err: unknown) => {
    console.error(err);
  });
