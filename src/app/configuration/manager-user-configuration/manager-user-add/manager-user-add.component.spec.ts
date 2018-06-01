import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUserAddComponent } from './manager-user-add.component';

describe('ManagerUserAddComponent', () => {
  let component: ManagerUserAddComponent;
  let fixture: ComponentFixture<ManagerUserAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUserAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
