import { Component, Input, OnInit } from '@angular/core';
import Series from '../shared/models/series.model';
import { forkJoin } from 'rxjs';
import { CarouselServices } from './carousel.services';
@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
	@Input() seriesIds: Array<number> = [];

	seriesArray: Array<Series> = [];

	constructor(private service: CarouselServices) {}

	listenChild(index: number) {
		console.log(index);
	}

	ngOnInit(): void {
		forkJoin(
			this.seriesIds.map((serieId) => {
				return this.service.getSerieById(serieId);
			}),
		).subscribe((result) => (this.seriesArray = result));
	}
}
