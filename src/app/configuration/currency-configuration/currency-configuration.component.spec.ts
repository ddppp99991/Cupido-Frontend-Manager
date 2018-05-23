import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConfigurationComponent } from './currency-configuration.component';

describe('CurrencyConfigurationComponent', () => {
  let component: CurrencyConfigurationComponent;
  let fixture: ComponentFixture<CurrencyConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
