import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bcc-label',
  templateUrl: './bcc-label.component.html',
  styleUrls: ['./bcc-label.component.css']
})
export class BccLabelComponent implements OnInit {

  @Input()
  text: string;
  constructor() { }

  ngOnInit() {
  }

}
