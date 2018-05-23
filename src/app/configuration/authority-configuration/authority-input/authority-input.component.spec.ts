import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityInputComponent } from './authority-input.component';

describe('AuthorityInputComponent', () => {
  let component: AuthorityInputComponent;
  let fixture: ComponentFixture<AuthorityInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorityInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
