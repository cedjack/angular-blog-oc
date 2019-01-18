import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {SinglePostComponent} from './post-list/single-post/single-post.component';
import {PostFormComponent} from './post-list/post-form/post-form.component';

const routes: Routes = [
  {path: 'posts', component: PostListComponent },
  {path: 'posts/new', component: PostFormComponent },
  {path: 'posts/:id', component: SinglePostComponent },
  {path: '', redirectTo: 'posts', pathMatch: 'full' },
  {path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
