import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {BasicHttp} from './shared/basic-http';
import {BasicRequestOptions} from './shared/basic-request.options';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgLoggerModule} from '@nsalaun/ng-logger';
import {NgModule} from '@angular/core';
import {PostsComponent} from './modules/posts/posts.component';
import {PostsService} from './modules/posts/posts.service';
import {XcMenuComponent} from './components/xc-menu/xc-menu.component';
import {environment} from '../environments/environment';

export function BasicHttpFactory(backend: XHRBackend, defaultOptions: BasicRequestOptions) {
  return new BasicHttp(backend, defaultOptions);
}

@NgModule({
  declarations: [
    AppComponent,
    XcMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgLoggerModule.forRoot(environment.logLevel),
  ],
  providers: [
    BasicRequestOptions,
    {
      provide: BasicHttp,
      useFactory: BasicHttpFactory,
      deps: [XHRBackend, BasicRequestOptions]
    },
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
