import {RequestOptions, RequestOptionsArgs, Response} from '@angular/http';

import {APP_CONF} from '../../../assets/rest/app-conf.const';
import {BasicHttp} from '../../shared/basic-http';
import {Injectable} from '@angular/core';
import {Logger} from '@nsalaun/ng-logger';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostsService {

  constructor(private logger: Logger, private http: BasicHttp) {
  }

  getAll(): Observable<any> {
    const options: RequestOptions = this.http.getDefaultOptions();
    options.headers.append('Third-Custom', 'third cutom header');

    return this.http.get(APP_CONF.REST.POSTS, options).map((res: Response) => res.json());
  }

}
