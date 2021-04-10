import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../shared/shared.module';
import { PostService } from './post.service';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostInterceptor } from './post.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [PostComponent, EditPostComponent, AddComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule
  ],
  providers:[
    PostService,
    {
      provide:HTTP_INTERCEPTORS,useClass:PostInterceptor, multi:true
    }
  ]
})
export class PostModule { }
