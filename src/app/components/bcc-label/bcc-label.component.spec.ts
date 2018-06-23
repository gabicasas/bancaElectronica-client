import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BccLabelComponent } from './bcc-label.component';

describe('BccLabelComponent', () => {
  let component: BccLabelComponent;
  let fixture: ComponentFixture<BccLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BccLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BccLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
