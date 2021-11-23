import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormComponent } from './frame2/form-login/form.component';

import { Frame4Component } from './frame4/frame4.component';
import { Frame2Component } from './frame2/frame2.component';
import { FooterLoginComponent } from './frame2/footer-login/footer-login.component';
import { ToobarLoginComponent } from './frame2/toobar-login/toobar-login.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Frame4Component,
    Frame2Component,
		FooterLoginComponent,
  	ToobarLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
