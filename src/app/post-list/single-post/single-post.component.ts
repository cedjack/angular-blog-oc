import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post.model';
import {PostsService} from '../../services/Post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  @Input() post: Post;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
  }

  onLike() {
    this.postsService.addLoveIts(this.post);
  }

  onDislike() {
    this.postsService.removeLoveIts(this.post);
  }

  onRemovePost() {
    this.postsService.removePost(this.post);
  }

}
