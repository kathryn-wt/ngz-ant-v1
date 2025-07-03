---
order: 0
title: WelTel - Our Brand IN CHINESE
---

This is a test page to see if it is possible to create a page for WelTel's information.

### Turn Off Globally

Replace `BrowserAnimationsModule` with `NoopAnimationsModule` in the module.

```ts
import { provideNoopAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideNoopAnimations()
  ]
}
```

### Turn Off In Templates


Import `NzNoAnimationModule`.

```ts
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';

@Component({
  imports: [
    // ...
    NzNoAnimationModule
  ]
})
```

Add the `nzNoAnimation` directive to the component.

```html
<nz-modal nzNoAnimation></nz-modal>
<ul nz-menu nzNoAnimation></ul>
```

### Turn Off In Services

Add the following configuration while invoking components' services.

#### Modal, Drawer

```ts
{
  // ...
  nzNoAnimation: true
}
```

#### Notification, Message

```ts
{
  // ...
  nzAnimate: false
}
```

### Turn Off The Wave Effect

Some components use dynamic styles to support wave effects, so their styles are unable to be overridden directly.
Instead, you can use `provideNzWave` or use `NoopAnimationsModule` to turn off the wave effects.

```ts
import { provideNzWave } from 'ng-zorro-antd/core/wave';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNzWave({ disabled: true })
  ]
}
```
