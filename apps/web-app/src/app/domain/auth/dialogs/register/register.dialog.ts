import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cza-register',
  imports: [],
  templateUrl: './register.dialog.html',
  styleUrl: './register.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterDialog {}
