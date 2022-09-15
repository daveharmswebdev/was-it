import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'was-it-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PeopleComponent implements OnInit {
  people$ = this.peopleService.getUsers();

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people$.subscribe(console.log);
  }
}
