import { Component, OnInit } from '@angular/core';
import { FujitsuRequesterService } from '../services/fujitsu-requester.service';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent implements OnInit {

  message = 'aa';

  constructor(private requester: FujitsuRequesterService) { }

  ngOnInit() {
    this.message = this.requester.getData().message;
  }

}
