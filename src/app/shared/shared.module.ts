import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [HeaderComponent, DialogComponent],
  entryComponents:[DialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    RouterModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }