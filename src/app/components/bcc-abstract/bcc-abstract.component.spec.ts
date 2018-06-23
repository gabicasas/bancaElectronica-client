import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BccAbstractComponent } from './bcc-abstract.component';

describe('BccAbstractComponent', () => {
  let component: BccAbstractComponent;
  let fixture: ComponentFixture<BccAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BccAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BccAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
