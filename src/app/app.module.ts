import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Frame5Component } from './frame5/frame5.component';
import { NavbarComponent } from './frame5/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Frame5Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
