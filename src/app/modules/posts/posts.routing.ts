import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {PostsComponent} from './posts.component';
import {PostComponent} from './components/post/post.component';
import {APP_CONF} from '../../../assets/rest/app-conf.const';

const routes: Routes = [
  {path: APP_CONF.ROUTES.ROOT.url, component: PostsComponent},
  {path: APP_CONF.ROUTES.POSTS.children.POST.url + '/:id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {

}
