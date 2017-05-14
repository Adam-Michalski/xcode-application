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

  constructor(private logger: Logger) {

  }

  ngOnInit(): void {
    this.logger.log('App component on init');
  }
}
