import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {APP_CONF} from '../assets/rest/app-conf.const';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: APP_CONF.ROUTES.ROOT.url, redirectTo: APP_CONF.ROUTES.POSTS.url, pathMatch: 'full'},
  {path: APP_CONF.ROUTES.POSTS.url, loadChildren: './modules/posts/posts.module#PostsModule'},
  {path: APP_CONF.ROUTES.USERS.url, loadChildren: './modules/users/users.module#UsersModule'},
  {path: '**' , redirectTo: APP_CONF.ROUTES.POSTS.url, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, initialNavigation: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
