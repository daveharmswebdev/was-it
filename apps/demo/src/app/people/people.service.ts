import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@was-it/models';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable()
export class PeopleService {
  private _users = new BehaviorSubject<IUser[]>([]);
  users$ = this._users.asObservable();

  constructor(private http: HttpClient) {}

  getUsers(): void {
    if (this._users.value.length === 0) {
      this.http
        .get<IUser[]>('http://localhost:3333/api/users')
        .subscribe((users) => this._users.next(users));
    }
  }

  getUserById(id: number): Observable<IUser> {
    if (this._users.value.length > 0) {
      return this.users$.pipe(
        map((users) => users.find((user) => user.id === id) as IUser)
      );
    } else {
      return this.http.get<IUser[]>('http://localhost:3333/api/users').pipe(
        tap((users) => this._users.next(users)),
        map(
          (users) =>
            users.find((user) => user.id === id) || {
              id,
              email: 'none',
              zipCode: '',
            }
        )
      );
    }
  }
}
