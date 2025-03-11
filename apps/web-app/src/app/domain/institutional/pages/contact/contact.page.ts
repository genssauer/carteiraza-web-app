import { NzButtonComponent } from 'ng-zorro-antd/button';

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'cza-contact',
  imports: [TranslocoModule, NzButtonComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  private translocoService = inject(TranslocoService);

  protected changeLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
