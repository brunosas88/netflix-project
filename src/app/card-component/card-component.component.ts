import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Series from '../shared/models/series.model';

@Component({
	selector: 'app-card-component',
	templateUrl: './card-component.component.html',
	styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent implements OnInit {
	@Input() series: Series = {} as Series;
	@Input() index: number = 0;

	@Output() childIndex: EventEmitter<number> = new EventEmitter();

	constructor() {}

	sendIndex() {
		this.childIndex.emit(this.index);
	}

	ngOnInit(): void {
		console.log(this.index);
	}
}
