import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssestInputComponent } from './assest-input.component';

describe('AssestInputComponent', () => {
  let component: AssestInputComponent;
  let fixture: ComponentFixture<AssestInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssestInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssestInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
