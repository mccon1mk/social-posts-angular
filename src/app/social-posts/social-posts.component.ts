import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Class',
      thought: 'is tough'
    },
  ];

  constructor() {
  }
  ngOnInit() {
    // let post = [{}];
    // console.log(post);
    // console.log(this);
    // this.posts[0].title = "work";
    // this.posts[0].thought = "sucks";
  }

}
