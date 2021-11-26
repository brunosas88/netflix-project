import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselComponent } from '../carousel/carousel.component';
import { SeriesModalComponent } from '../series-modal/series-modal.component';

@NgModule({
	declarations: [SeriesModalComponent],
	imports: [CarouselComponent, BrowserModule, SeriesModalComponent],
})
export class Frame5Module {}
