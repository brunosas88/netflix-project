import { Component, Input, OnInit } from '@angular/core';
import Series from '../shared/models/series.model';

@Component({
	selector: 'app-card-component',
	templateUrl: './card-component.component.html',
	styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent implements OnInit {
	@Input() series: Series = {} as Series;

	constructor() {}

	ngOnInit(): void {}
}
