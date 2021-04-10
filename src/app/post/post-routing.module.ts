import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { AddComponent } from './add/add.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path:'',component:HeaderComponent,

    children:[
      {
        path:'',component:PostComponent,
      },
      {
        path:'edit/:author_id/:posts_id',component:EditPostComponent
      },
      {
        path:'add/:id',
        component:AddComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
