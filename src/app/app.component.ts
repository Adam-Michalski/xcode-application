import {Component, OnInit} from '@angular/core';
import {Http, RequestOptionsArgs} from '@angular/http';

import {APP_CONF} from '../assets/rest/app-conf.const';
import {BasicHttp} from './shared/basic-http';
import {Logger} from '@nsalaun/ng-logger';

@Component({
  selector: 'xc-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private logger: Logger, private http: BasicHttp) {

  }

  ngOnInit(): void {
    const options: RequestOptionsArgs = this.http.getDefaultOptions();
    options.headers.append('Third-Custom', 'third cutom header');
    this.http.get(APP_CONF.REST.POSTS, options).subscribe((res) => {
      this.logger.log(res);
    })
  }
}
