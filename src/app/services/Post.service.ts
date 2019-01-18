import {Injectable} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [
    new Post(
      1,
      'Premier post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\' +\n' +
      '        \' et dolore magna aliqua. Ut enim ad minim veniam, quis',
      2
    ),
    new Post(
      2,
      'Second post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore' +
      ' et dolore magna aliqua. Ut enim ad minim veniam, quis',
      -2
    ),
    new Post(
      3,
      'Troisième post',
      'Personne n\'aime la douleur en elle-même, ne la recherche et ne la souhaite, ' +
      'tout simplement parce qu\'il s\'agit de la douleur ...',
    )
  ];

  postsSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    this.emitPosts();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToFind = this.posts.findIndex(
      (postElement) => {
        if (postElement === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToFind, 1);
    this.emitPosts();
  }

  addLoveIts(post: Post) {
    const postIndexToFind = this.posts.findIndex(
      (postElement) => {
        if (postElement === post) {
          return true;
        }
      }
    );
    this.posts[postIndexToFind].loveIts += 1;
    this.emitPosts();
  }

  removeLoveIts(post: Post) {
    const postIndexToFind = this.posts.findIndex(
      (postElement) => {
        if (postElement === post) {
          return true;
        }
      }
    );
    this.posts[postIndexToFind].loveIts -= 1;
    this.emitPosts();
  }

  getIndexOfNewPost() {
    return this.posts[this.posts.length - 1].index + 1;
  }
}
