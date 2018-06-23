import { Component, OnInit, ViewChild } from '@angular/core';
import { FujitsuRequesterService } from '../services/fujitsu-requester.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  headers = ['nº', 'Nombre', 'Peso', 'Símbolo'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  message = 'aa';

  constructor(private requester: FujitsuRequesterService) { }

  ngOnInit() {
    // Obtiene los datos del servidor
    this.message = this.requester.getData().message;

    this.dataSource.sort = this.sort;
  }
}
  /*export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }*/

  const ELEMENT_DATA: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];


