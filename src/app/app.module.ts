import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './user-page/user-page.component';

import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { PromoListTextLeftComponent } from './components/promo-list-text-left/promo-list-text-left.component';
import { PromoListTextRightComponent } from './components/promo-list-text-right/promo-list-text-right.component';
import { FooterStartComponent } from './components/footer-start/footer-start.component';

import { FormLoginComponent } from './login-page/form-login/form-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterLoginComponent } from './login-page/footer-login/footer-login.component';
import { SeriesPageComponent } from './series-page/series-page.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './series-page/navbar/navbar.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { SeriesModalComponent } from './series-modal/series-modal.component';
import { SeriesInfoComponent } from './series-info/series-info.component';

@NgModule({
	declarations: [
		AppComponent,
		UserPageComponent,
		AppComponent,
		FormLoginComponent,
		LoginPageComponent,
		FooterLoginComponent,
		ToolbarComponent,
		HomePageComponent,
		FooterComponent,
		PromoListTextLeftComponent,
		PromoListTextRightComponent,
		FooterStartComponent,
		SeriesPageComponent,
		CardComponentComponent,
		CarouselComponent,
		AppComponent,
		NavbarComponent,
		SeriesModalComponent,
		SeriesInfoComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
