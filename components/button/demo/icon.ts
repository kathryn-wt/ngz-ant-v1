import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-button-icon',
  imports: [NzButtonModule, NzIconModule],
  template: `
    <button nz-button nzType="primary">
      <nz-icon nzType="search" />
    </button>
    <button nz-button nzType="primary">A</button>
    <button nz-button nzType="primary">
      <nz-icon nzType="search" />
      Search
    </button>
    <button nz-button nzType="default">
      <nz-icon nzType="search" />
    </button>
    <button nz-button nzType="default">
      <nz-icon nzType="search" />
      Search
    </button>
    <br />
    <button nz-button nzType="default"><nz-icon nzType="search" /></button>
    <button nz-button nzType="default">
      <nz-icon nzType="search" />
      Search
    </button>
    <button nz-button nzType="dashed"><nz-icon nzType="search" /></button>
    <button nz-button nzType="dashed">
      <nz-icon nzType="search" />
      Search
    </button>
  `,
  styles: [
    `
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
        border-radius: 10px;
      }
    `
  ]
})
export class NzDemoButtonIconComponent {}
