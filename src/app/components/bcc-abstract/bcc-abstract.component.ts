import { Component, OnInit } from '@angular/core';
import { FujitsuRequesterService } from '../../services/fujitsu-requester.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bcc-abstract',
  templateUrl: './bcc-abstract.component.html',
  styleUrls: ['./bcc-abstract.component.css']

})
export class BccAbstractComponent implements OnInit {

  public data = undefined;
  constructor(private requester: FujitsuRequesterService) {
    console.log(this.constructor.name);
   }

  ngOnInit() {
    this.data = this.requester.getData();

  }

}
