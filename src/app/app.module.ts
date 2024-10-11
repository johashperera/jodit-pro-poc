import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxJoditProModule,} from 'ngx-jodit-pro';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxJoditProModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
