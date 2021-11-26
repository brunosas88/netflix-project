import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { PromoListTextLeftComponent } from './components/promo-list-text-left/promo-list-text-left.component';
import { PromoListTextRightComponent } from './components/promo-list-text-right/promo-list-text-right.component';
import { FooterStartComponent } from './components/footer-start/footer-start.component';

import { FormLoginComponent } from './login-page/form-login/form-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterLoginComponent } from './login-page/footer-login/footer-login.component';
import { ToobarLoginComponent } from './login-page/toobar-login/toobar-login.component';

@NgModule({
	declarations: [
		AppComponent,
		FormLoginComponent,
		LoginPageComponent,
		FooterLoginComponent,
		ToobarLoginComponent,
		HomePageComponent,
		FooterComponent,
		PromoListTextLeftComponent,
		PromoListTextRightComponent,
		FooterStartComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
