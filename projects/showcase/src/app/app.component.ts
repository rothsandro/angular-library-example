import { Component } from '@angular/core';
import { ButtonComponent } from '@mycomp/ui-sdk/button';
import { UiSdkComponent } from '@mycomp/ui-sdk';

@Component({
  selector: 'app-root',
  imports: [UiSdkComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
