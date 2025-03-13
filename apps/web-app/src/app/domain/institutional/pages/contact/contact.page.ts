import { NzButtonComponent } from 'ng-zorro-antd/button';

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ThemeService } from '@shared/services/theme/theme.service';

@Component({
  selector: 'cza-contact',
  imports: [TranslocoModule, NzButtonComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  private translocoService = inject(TranslocoService);

  private themeService = inject(ThemeService);

  protected changeLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
