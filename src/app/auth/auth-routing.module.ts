import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { AddAuthComponent } from './add-auth/add-auth.component';
import { AuthComponent } from './auth/auth.component';
import { EditAuthComponent } from './edit-auth/edit-auth.component';

const routes: Routes = [
  {
    path:'',component:HeaderComponent,

    children:[
      {
        path:'',component:AuthComponent,
      },
      {
        path:'edit/:id',
        component:EditAuthComponent,
      },
      {
        path:'add',
        component:AddAuthComponent,
      }
      
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }