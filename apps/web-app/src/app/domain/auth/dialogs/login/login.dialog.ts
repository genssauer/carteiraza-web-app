import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DateUtil } from '@shared/utils/date.util';

@Component({
  selector: 'cza-login',
  imports: [],
  templateUrl: './login.dialog.html',
  styleUrl: './login.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginDialog {
  constructor() {
    const data = DateUtil.getFormattedDate(new Date());
    console.log(data);
  }
}
