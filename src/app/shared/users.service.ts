import {Injectable} from '@angular/core';
import {BasicHttp} from './basic-http';
import {APP_CONF} from '../../assets/rest/app-conf.const';
import {RequestOptions} from '@angular/http';

@Injectable()
export class UsersService {

  constructor(private http: BasicHttp) {
  }

  getAll() {
    return this.http.get(APP_CONF.REST.USERS)
  }

  get(id) {
    const options: RequestOptions = this.http.getDefaultOptions();
    options.params.append('userId', id);
    return this.http.get(APP_CONF.REST.USERS, options);
  }
}
