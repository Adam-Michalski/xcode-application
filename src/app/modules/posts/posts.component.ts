import {Component, OnInit} from '@angular/core';

import {Logger} from '@nsalaun/ng-logger';
import {PostsService} from './posts.service';
import {Router} from '@angular/router';
import {APP_CONF} from '../../../assets/rest/app-conf.const';

@Component({
  selector: 'xc-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts;

  constructor(private logger: Logger, private postsService: PostsService, private router: Router) {
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getAll().subscribe((res) => {
      this.posts = res;
    });
  }

  select(post) {
    this.router.navigate([APP_CONF.ROUTES.POSTS.url, 'post', post.id]);
  }
}
