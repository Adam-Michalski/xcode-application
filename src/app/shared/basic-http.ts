import { Injectable } from '@angular/core';
import { ConnectionBackend, Headers, Http, Request, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BasicRequestOptions } from './basic-request.options';

@Injectable()
export class BasicHttp extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: BasicRequestOptions) {
    super(backend, defaultOptions);
  }

  /**
   * Veryfies if custom options is avaiable.
   */
  public getOptions(customOptions?: RequestOptions) {
    const requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.params = new URLSearchParams();
    return requestOptions;
  }

  public mergeOptions(customOptions?: RequestOptions) {
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
  public request(url: string | Request, options?: RequestOptions): Observable<Response> {
    return super.request(url, this.mergeOptions(options))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Performs a request with `get` http method.
   */
  public get(url: string, options?: RequestOptions): Observable<Response> {
    return super.get(url, this.mergeOptions(options))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Performs a request with `post` http method.
   */
  public post(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return super.post(url, body, this.mergeOptions(options))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Performs a request with `put` http method.
   */
  public put(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return super.put(url, body, this.mergeOptions(options))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Performs a request with `delete` http method.
   */
  public delete(url: string, options?: RequestOptions): Observable<Response> {
    return super.delete(url, this.mergeOptions(options))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Performs a request with `patch` http method.
   */
  public patch(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return super.patch(url, body, this.mergeOptions(options))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Performs a request with `head` http method.
   */
  public head(url: string, options?: RequestOptions): Observable<Response> {
    return super.head(url, this.mergeOptions(options))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Performs a request with `options` http method.
   */
  public options(url: string, options?: RequestOptions): Observable<Response> {
    return super.options(url, this.mergeOptions(options))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
