import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityConfigurationComponent } from './authority-configuration.component';

describe('AuthorityConfigurationComponent', () => {
  let component: AuthorityConfigurationComponent;
  let fixture: ComponentFixture<AuthorityConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorityConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
