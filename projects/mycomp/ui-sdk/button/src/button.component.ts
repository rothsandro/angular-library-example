import { Component, input } from '@angular/core';
import { TranslatePipe } from '@mycomp/ui-sdk/i18n';

@Component({
  selector: 'lib-button',
  imports: [TranslatePipe],
  template: `<button>{{ label() | translate }}</button> `,
  styles: ``,
})
export class ButtonComponent {
  label = input('Click me');
}
