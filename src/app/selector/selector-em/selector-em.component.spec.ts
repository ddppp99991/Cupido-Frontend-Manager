import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorEmComponent } from './selector-em.component';

describe('SelectorEmComponent', () => {
  let component: SelectorEmComponent;
  let fixture: ComponentFixture<SelectorEmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorEmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
