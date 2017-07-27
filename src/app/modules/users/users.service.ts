import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APP_CONF } from '../../../assets/rest/app-conf.const';
import { BasicHttp } from '../../shared/basic-http';
import { User, UserInterface } from './user.class';

@Injectable()
export class UsersService {

  constructor(private http: BasicHttp) {
  }

  public getAll(): Observable<Array<User>> {
    return this.http.get(APP_CONF.REST.USERS)
      .map(res => {
        const users = res.json() as UserInterface[];
        return users.map(user => {
          return new User(user);
        });
      });
  }

  public get(id): Observable<User> {
    const options: RequestOptions = this.http.getOptions();
    options.params.set('userId', id);
    return this.http.get(APP_CONF.REST.USERS, options)
      .map(res => {
        const user = res.json() as UserInterface;
        return new User(user);
      });
  }
}
