import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui-sdk',
  template: `
    <p>
      {{ 'hello world' | translate }}
    </p>
  `,
  styles: [],
})
export class UiSdkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
