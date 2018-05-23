import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssestManagerComponent } from './assest-manager.component';

describe('AssestManagerComponent', () => {
  let component: AssestManagerComponent;
  let fixture: ComponentFixture<AssestManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssestManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssestManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
