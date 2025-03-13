import { NzCardComponent } from 'ng-zorro-antd/card';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cza-base',
  imports: [RouterModule, NzCardComponent],
  templateUrl: './base.layout.html',
  styleUrl: './base.layout.scss',
})
export class BaseLayout {}
