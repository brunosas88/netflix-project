import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Frame5Component } from './frame5/frame5.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './frame5/navbar/navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		Frame5Component,
		CardComponentComponent,
		CarouselComponent,
		AppComponent,
		Frame5Component,
		NavbarComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
