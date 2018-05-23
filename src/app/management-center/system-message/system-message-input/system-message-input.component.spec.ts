import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMessageInputComponent } from './system-message-input.component';

describe('SystemMessageInputComponent', () => {
  let component: SystemMessageInputComponent;
  let fixture: ComponentFixture<SystemMessageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemMessageInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMessageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
