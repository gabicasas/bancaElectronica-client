import { Component, OnInit, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bcc-datatable',
  templateUrl: './bcc-datatable.component.html',
  styleUrls: ['./bcc-datatable.component.css']
})
export class BccDatatableComponent implements OnInit {
  
  definedColumns = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay = this.definedColumns.slice();
 

  @Input('dataset')
  set dataset(data: any[]) {
    this.datasource = data;
    this.changeDetectorRefs.detectChanges();
    this.dataSourceObj = new MatTableDataSource(this.datasource);
    console.log(this.datasource);
    this.dataSourceObj.sort = this.sort;
  }

  get dataset(): any[] { return this.datasource; }
  datasource: any[] = [
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


  @ViewChild(MatSort) sort: MatSort;

  dataSourceObj = new MatTableDataSource(this.datasource);
  ngOnInit() {

    this.dataSourceObj.sort = this.sort;
  }

  constructor(private changeDetectorRefs: ChangeDetectorRef) {}

}

