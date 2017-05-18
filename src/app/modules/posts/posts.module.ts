import {BasicSharedModule} from '../../shared/basic-shared.module';
import {NgModule} from '@angular/core';
import {PostsComponent} from './posts.component';
import {PostsRoutingModule} from './posts.routing';
import {PostComponent} from './components/post/post.component';

@NgModule({
  imports: [
    BasicSharedModule,
    PostsRoutingModule
  ],
  declarations: [PostsComponent, PostComponent]
})
export class PostsModule {
}
