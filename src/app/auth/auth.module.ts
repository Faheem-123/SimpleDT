import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { EditAuthComponent } from './edit-auth/edit-auth.component';
import { MaterialModule } from '../material/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { AddAuthComponent } from './add-auth/add-auth.component';


@NgModule({
  declarations: [AuthComponent, EditAuthComponent, AddAuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers:[
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorInterceptor, multi:true
    }
  ]
})
export class AuthModule { }
