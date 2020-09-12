import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './modules/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRouter} from './modules/app.router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRouter,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
