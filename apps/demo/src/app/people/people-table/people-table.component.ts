import { Component, Input, ViewChild } from '@angular/core';
import { IUser } from '../../models/IUser';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'was-it-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css'],
})
export class PeopleTableComponent {
  displayedColumns = ['id', 'email', 'zipCode'];
  private _dataSource!: MatTableDataSource<IUser>;

  get dataSource() {
    return this._dataSource;
  }

  @Input()
  set people(value: IUser[]) {
    if (value) {
      this._dataSource = new MatTableDataSource<IUser>(value);
      this.dataSource.paginator = this.paginator;
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
}
