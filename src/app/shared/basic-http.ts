import {
  ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response,
  URLSearchParams
} from '@angular/http';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BasicRequestOptions} from './basic-request.options';

@Injectable()
export class BasicHttp extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: BasicRequestOptions) {
    super(backend, defaultOptions);
  }

  /**
   * Veryfies if custom options is avaiable.
   */
  getOptions(customOptions?: RequestOptions) {
    const ro = new RequestOptions();
    ro.headers = new Headers();
    ro.params = new URLSearchParams();
    return ro;
  }

  mergeOptions(customOptions?: RequestOptions) {
    if (customOptions) {
      return customOptions.merge(this._defaultOptions);
    }
  }

  /**
   * Performs any type of http request. First argument is required, and can either be a url or
   * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
   * object can be provided as the 2nd argument. The options object will be merged with the values
   * of {@link BaseRequestOptions} before performing the request.
   */
  request(url: string | Request, options?: RequestOptions): Observable<Response> {
    return super.request(url, this.mergeOptions(options)).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

  /**
   * Performs a request with `get` http method.
   */
  get(url: string, options?: RequestOptions): Observable<Response> {
    return super.get(url, this.mergeOptions(options)).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

  /**
   * Performs a request with `post` http method.
   */
  post(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return super.post(url, body, this.mergeOptions(options)).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

  /**
   * Performs a request with `put` http method.
   */
  put(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return super.put(url, body, this.mergeOptions(options)).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

  /**
   * Performs a request with `delete` http method.
   */
  delete(url: string, options?: RequestOptions): Observable<Response> {
    return super.delete(url, this.mergeOptions(options)).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

  /**
   * Performs a request with `patch` http method.
   */
  patch(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return super.patch(url, body, this.mergeOptions(options)).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

  /**
   * Performs a request with `head` http method.
   */
  head(url: string, options?: RequestOptions): Observable<Response> {
    return super.head(url, this.mergeOptions(options)).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

  /**
   * Performs a request with `options` http method.
   */
  options(url: string, options?: RequestOptions): Observable<Response> {
    return super.options(url, this.mergeOptions(options)).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }
}
