import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketConfigurationComponent } from './market-configuration.component';

describe('MarketConfigurationComponent', () => {
  let component: MarketConfigurationComponent;
  let fixture: ComponentFixture<MarketConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
