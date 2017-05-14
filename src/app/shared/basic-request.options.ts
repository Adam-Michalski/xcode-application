import {BaseRequestOptions, Headers} from '@angular/http';

import {Injectable} from '@angular/core';

@Injectable()
export class BasicRequestOptions extends BaseRequestOptions {
  headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Another-Custom-Header': 'another check'
  });
}
