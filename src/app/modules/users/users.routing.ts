import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users.component';
import {NgModule} from '@angular/core';
import {APP_CONF} from '../../../assets/rest/app-conf.const';

export const routes: Routes = [
  {path: APP_CONF.ROUTES.ROOT.url, component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UsersRoutingModule {

}
