import { Component, Input } from '@angular/core';
import { I18nModule } from '@mycomp/ui-sdk/i18n';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [I18nModule],
})
export class CardComponent {}
