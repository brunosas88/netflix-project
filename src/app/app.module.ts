import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Frame1Component } from './frame1/frame1.component';
import { FooterComponent } from './components/footer/footer.component';
import { PromoListTextLeftComponent } from './components/promo-list-text-left/promo-list-text-left.component';
import { PromoListTextRightComponent } from './components/promo-list-text-right/promo-list-text-right.component';
import { FooterStartComponent } from './components/footer-start/footer-start.component';

import { FormLoginComponent } from './frame2/form-login/form-login.component';
import { Frame2Component } from './frame2/frame2.component';
import { FooterLoginComponent } from './frame2/footer-login/footer-login.component';
import { ToobarLoginComponent } from './frame2/toobar-login/toobar-login.component';


@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    Frame2Component,
		FooterLoginComponent,
  	ToobarLoginComponent,
    Frame1Component,
    FooterComponent,
    PromoListTextLeftComponent,
    PromoListTextRightComponent,
    FooterStartComponent
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
