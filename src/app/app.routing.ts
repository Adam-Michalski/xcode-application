import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {APP_CONF} from '../assets/rest/app-conf.const';
import {NgModule} from '@angular/core';

const routes: Routes = [
  // {path: APP_CONF.ROUTES.ROOT, redirectTo: APP_CONF.ROUTES, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, initialNavigation: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
