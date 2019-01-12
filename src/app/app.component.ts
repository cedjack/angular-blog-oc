import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    new Post (
      1,
      'Premier post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\' +\n' +
      '        \' et dolore magna aliqua. Ut enim ad minim veniam, quis'
    ),
    new Post (
      2,
      'Second post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore' +
        ' et dolore magna aliqua. Ut enim ad minim veniam, quis'
    ),
    new Post (
      3,
      'Troisième post',
      'Personne n\'aime la douleur en elle-même, ne la recherche et ne la souhaite, ' +
        'tout simplement parce qu\'il s\'agit de la douleur ...'
    )
  ];

}
