import {RequestOptions, Response, URLSearchParams} from '@angular/http';

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
    const options: RequestOptions = this.http.getOptions();
    options.headers.append('Third-Custom', 'third cutom header');
    return this.http.get(APP_CONF.REST.POSTS, options).map((res: Response) => res.json());
  }

  get(postId): Observable<any> {
    const options: RequestOptions = this.http.getOptions();
    options.params.set('id', postId);
    return this.http.get(APP_CONF.REST.POSTS, options).map((res: Response) => res.json());
  }

  getOwner(userId) {
    const options: RequestOptions = this.http.getOptions();
    options.params.set('userId', userId);
    return this.http.get(APP_CONF.REST.USERS, options);
  }

  getComments(postId) {
    const options: RequestOptions = this.http.getOptions();
    options.params.set('postId', postId);
    return this.http.get(APP_CONF.REST.COMMENTS, options);
  }

}
