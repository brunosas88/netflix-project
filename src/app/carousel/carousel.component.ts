import { Component, Input, OnInit } from '@angular/core';
import Series from '../shared/models/series.model';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
	@Input() seriesArray: Array<Series> = [];

	constructor() {}

	ngOnInit(): void {}
}
