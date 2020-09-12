import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistreComponent } from './registre/registre.component';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSortModule, MatTableModule} from '@angular/material';
import { DatapickerComponent } from './datapicker/datapicker.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistreComponent,
    DatapickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
