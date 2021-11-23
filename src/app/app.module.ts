import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Frame1Component } from './frame1/frame1.component';
import { FooterComponent } from './components/footer/footer.component';
import { PromoListTextLeftComponent } from './components/promo-list-text-left/promo-list-text-left.component';
import { PromoListTextRightComponent } from './components/promo-list-text-right/promo-list-text-right.component';
import { FooterStartComponent } from './components/footer-start/footer-start.component';

@NgModule({
  declarations: [
    AppComponent,
    Frame1Component,
    FooterComponent,
    PromoListTextLeftComponent,
    PromoListTextRightComponent,
    FooterStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
