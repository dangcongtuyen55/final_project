import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ValueComponent } from './value/value.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';





const routes: Routes = [
  { path: 'dashBoard', component: DashBoardComponent }, 
]

@NgModule({
  declarations: [					
    AppComponent, ValueComponent, DashBoardComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule,
    AuthModule, 

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
