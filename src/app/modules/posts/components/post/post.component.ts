import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'xc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post;

  constructor() {}

  ngOnInit() {
  }

}
