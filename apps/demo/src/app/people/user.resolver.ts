import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { IUser } from '@was-it/models';
import { Observable } from 'rxjs';
import { PeopleService } from './people.service';

@Injectable()
export class UserResolver implements Resolve<IUser> {
  constructor(private peopleService: PeopleService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IUser> | Promise<IUser> | IUser {
    const id = route.paramMap.get('id') ?? '0';
    return this.peopleService.getUserById(+id);
  }
}
