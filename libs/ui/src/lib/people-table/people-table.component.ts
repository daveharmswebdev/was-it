import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IUser } from '@was-it/models';

@Component({
  selector: 'was-it-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss'],
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

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 1);
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  show(row: any) {
    console.log('click', row);
  }
}
