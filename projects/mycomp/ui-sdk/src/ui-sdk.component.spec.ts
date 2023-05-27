import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSdkComponent } from './ui-sdk.component';

describe('UiSdkComponent', () => {
  let component: UiSdkComponent;
  let fixture: ComponentFixture<UiSdkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UiSdkComponent]
    });
    fixture = TestBed.createComponent(UiSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
