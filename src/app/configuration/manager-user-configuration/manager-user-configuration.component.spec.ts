import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUserConfigurationComponent } from './manager-user-configuration.component';

describe('ManagerUserConfigurationComponent', () => {
  let component: ManagerUserConfigurationComponent;
  let fixture: ComponentFixture<ManagerUserConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUserConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUserConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
