import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { I18nModule } from '@mycomp/ui-sdk/i18n';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, I18nModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
