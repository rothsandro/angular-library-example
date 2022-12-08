import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@mycomp/ui-sdk/button';
import { UiSdkModule } from '@mycomp/ui-sdk';
import { AppComponent } from './app.component';
import { CardComponent } from '@mycomp/ui-sdk/card';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiSdkModule, ButtonModule, CardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
