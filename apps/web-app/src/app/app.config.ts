import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, inject, isDevMode, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { ThemeService } from '@shared/services/theme/theme.service';

import { appRoutes } from './app.routes';
import { TranslocoHttpLoader } from './transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideTransloco({
      config: {
        availableLangs: ['en', 'es', 'pt-BR'],
        defaultLang: 'pt-BR',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideAppInitializer(() => inject(ThemeService).loadTheme()),
  ],
};
