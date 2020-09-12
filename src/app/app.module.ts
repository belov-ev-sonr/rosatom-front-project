import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './modules/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRouter} from './modules/app.router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './modules/shared.module';
import {RegistreComponent} from './registre/registre.component';
import {DatapickerComponent} from './datapicker/datapicker.component';
import { TabBarComponent } from './modules/tab-bar/tab-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabBarComponent
    LoginComponent,
    RegistreComponent,
    DatapickerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppRouter,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
