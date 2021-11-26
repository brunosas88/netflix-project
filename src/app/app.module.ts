import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesModalComponent } from './series-modal/series-modal.component';
import { SeriesInfoComponent } from './series-info/series-info.component';

@NgModule({
	declarations: [AppComponent, SeriesModalComponent, SeriesModalComponent, SeriesInfoComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
