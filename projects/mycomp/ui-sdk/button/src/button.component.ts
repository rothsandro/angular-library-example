import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@mycomp/ui-sdk/i18n';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  label = 'Click me';
}
