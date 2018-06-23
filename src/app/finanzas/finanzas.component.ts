import { Component, OnInit, ViewChild } from '@angular/core';
import { FujitsuRequesterService } from '../services/fujitsu-requester.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { BccAbstractComponent } from '../components/bcc-abstract/bcc-abstract.component';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent extends BccAbstractComponent  {


 /* constructor(private requester: FujitsuRequesterService) {
    super();
   }*/


}



