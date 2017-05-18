import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
function json<T>(this: Observable<Response>): Observable<T> {
  return this.map((response: Response) => response.json());
}
declare module 'rxjs/Observable' {
  interface Observable<T> {
    json: typeof json;
  }
}
Observable.prototype.json = json;
