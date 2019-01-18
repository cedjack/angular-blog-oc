import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {PostsService} from '../services/Post.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService,
              private router: Router) {
  }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }

}
