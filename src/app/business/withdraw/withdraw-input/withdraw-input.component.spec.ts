import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawInputComponent } from './withdraw-input.component';

describe('WithdrawInputComponent', () => {
  let component: WithdrawInputComponent;
  let fixture: ComponentFixture<WithdrawInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
