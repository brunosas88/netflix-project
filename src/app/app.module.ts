import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Frame4Component } from './frame4/frame4.component';
import { HttpClientModule } from '@angular/common/http';
import { Frame2Component } from './frame2/frame2.component';
import { FooterLoginComponent } from './frame2/footer-login/footer-login.component';

@NgModule({
  declarations: [
    AppComponent,
    Frame4Component,
    Frame2Component,
    FooterLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
