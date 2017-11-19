import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Error404Module } from './error404/error404.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
  //  Error404Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
