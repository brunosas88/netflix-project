import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesPageComponent } from './series-page/series-page.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './series-page/navbar/navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		SeriesPageComponent,
		CardComponentComponent,
		CarouselComponent,
		AppComponent,
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
