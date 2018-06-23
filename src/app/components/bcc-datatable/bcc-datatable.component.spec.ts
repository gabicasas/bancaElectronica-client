import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BccDatatableComponent } from './bcc-datatable.component';

describe('BccDatatableComponent', () => {
  let component: BccDatatableComponent;
  let fixture: ComponentFixture<BccDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BccDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BccDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
