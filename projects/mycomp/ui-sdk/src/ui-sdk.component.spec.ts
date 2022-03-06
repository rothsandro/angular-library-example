import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiSdkComponent } from './ui-sdk.component';
import { I18nModule } from '@mycomp/ui-sdk/i18n';

describe('UiSdkComponent', () => {
  let component: UiSdkComponent;
  let fixture: ComponentFixture<UiSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSdkComponent],
      imports: [I18nModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
