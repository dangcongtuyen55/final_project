import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';








@NgModule({
  declarations: [
    HeaderComponent,
    ColumnOneComponent,

  ],
  imports: [
    CommonModule,
    RouterModule, 
    BrowserAnimationsModule,
    BrowserModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 4000, positionX: 'right'}),  
    BsDropdownModule.forRoot(),



  ],
  exports: [
    ColumnOneComponent,
   
  ]
})
export class SharedModule { }
  