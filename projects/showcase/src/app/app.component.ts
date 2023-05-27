import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSdkComponent } from '@mycomp/ui-sdk';
import { ButtonComponent } from '@mycomp/ui-sdk/button';
import { TranslatePipe } from '@mycomp/ui-sdk/i18n';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UiSdkComponent, ButtonComponent, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'showcase';
}
