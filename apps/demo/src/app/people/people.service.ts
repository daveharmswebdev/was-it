import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@was-it/models';
import { BehaviorSubject, map } from 'rxjs';

@Injectable()
export class PeopleService {
  private _users = new BehaviorSubject<IUser[]>([]);
  users$ = this._users.asObservable();

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http
      .get<IUser[]>('http://localhost:3333/api/users')
      .subscribe((users) => this._users.next(users));
  }

  getUserById(id: number) {
    if (this._users.value.length > 0) {
      return this.users$.pipe(
        map((users) => users.find((user) => user.id === id) as IUser)
      );
    } else {
      return this.http.get<IUser>('http://localhost:3333/api/users/' + id);
    }
  }
}
