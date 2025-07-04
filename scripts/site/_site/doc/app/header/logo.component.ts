import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a href="/" id="logo">
      <img width="100" height="57.41" alt="logo" src="./assets/img/weltel-final-logo.svg"/>
    </a>
  `
})
export class LogoComponent {}
