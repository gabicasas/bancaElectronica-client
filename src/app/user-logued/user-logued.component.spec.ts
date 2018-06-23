import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoguedComponent } from './user-logued.component';

describe('UserLoguedComponent', () => {
  let component: UserLoguedComponent;
  let fixture: ComponentFixture<UserLoguedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoguedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoguedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
