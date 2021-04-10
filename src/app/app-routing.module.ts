import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';

const routes: Routes = [
  {
    path:'',redirectTo:'auth',pathMatch:'full'
  },
  {
    path:'auth',

    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'post',

    loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
