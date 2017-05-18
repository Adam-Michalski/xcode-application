import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../posts.service';
import {Logger} from '@nsalaun/ng-logger';
import {ActivatedRoute} from '@angular/router';
import {APP_CONF} from '../../../../../assets/rest/app-conf.const';

@Component({
  selector: 'xc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  data = {
    post: null,
    comments: null
  };

  constructor(private logger: Logger, private route: ActivatedRoute, private posts: PostsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getPost(id);
      this.getComents(id);
    });
  }

  getPost(id) {
    this.posts.get(id).subscribe((res) => {
      this.data.post = res[APP_CONF.FIRST_ELEMENT];
    })
  }

  getComents(id) {
    this.posts.getComments(id).subscribe((res) => {
      this.logger.log(res);
      this.data.comments = res.json();
    })
  }
}
