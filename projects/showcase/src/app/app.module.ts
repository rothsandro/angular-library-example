import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@mycomp/ui-sdk/button';
import { UiSdkModule } from '@mycomp/ui-sdk';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiSdkModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
