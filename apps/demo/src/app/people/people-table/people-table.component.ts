import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../models/IUser';

@Component({
  selector: 'was-it-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css'],
})
export class PeopleTableComponent implements OnInit {
  @Input() people: IUser[] = [];
  displayedColumns = ['id', 'email', 'zipCode'];

  constructor() {}

  ngOnInit(): void {}
}
