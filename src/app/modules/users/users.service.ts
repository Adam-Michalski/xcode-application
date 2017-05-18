import {Injectable} from '@angular/core';
import {BasicHttp} from '../../shared/basic-http';
import {APP_CONF} from '../../../assets/rest/app-conf.const';
import {RequestOptions} from '@angular/http';

@Injectable()
export class UsersService {

  constructor(private http: BasicHttp) {
  }

  getAll() {
    return this.http.get(APP_CONF.REST.USERS).json()
  }

  get(id) {
    const options: RequestOptions = this.http.getOptions();
    options.params.set('userId', id);
    return this.http.get(APP_CONF.REST.USERS, options).json();
  }
}
