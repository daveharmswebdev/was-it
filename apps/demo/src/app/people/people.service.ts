import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/IUser';

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<IUser[]>('http://localhost:3333/api/users');
  }
}
