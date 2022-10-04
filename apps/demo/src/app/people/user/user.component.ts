import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '@was-it/models';

@Component({
  selector: 'was-it-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UserComponent implements OnInit {
  user!: IUser;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ user }) => {
      console.log(user);

      this.user = user;
    });
  }
}
