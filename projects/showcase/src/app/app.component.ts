import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@mycomp/ui-sdk/button';
import { UiSdkComponent } from '@mycomp/ui-sdk';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiSdkComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'showcase';
}
