import {Component, OnInit} from '@angular/core';

import {Logger} from '@nsalaun/ng-logger';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts;
  selected;

  constructor(private logger: Logger, private postsService: PostsService) {
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getAll().subscribe((res) => {
      this.logger.log('posts', res);
      this.posts = res;
    });
  }

  select(post) {
    this.selected = post;
  }
}
