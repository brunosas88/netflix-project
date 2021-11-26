import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Series from '../shared/models/series.model';
import mockdata from './mockdata';

@Component({
	selector: 'app-series-modal',
	templateUrl: './series-modal.component.html',
	styleUrls: ['./series-modal.component.css'],
})
export class SeriesModalComponent implements OnInit {
	@Input() showModal: boolean = true;
	@Output() toggleModal: EventEmitter<boolean> = new EventEmitter();
	selectedSeries: Series = mockdata[0];

	constructor() {}

	ngOnInit(): void {}

	renderModal(index: number) {
		this.selectedSeries = mockdata[index];

		this.showModal = true;
	}

	hideModal() {
		this.showModal = false;
		this.toggleModal.emit(this.showModal);
	}

	ratingBackgorund(rating: number) {
		switch (rating) {
			case 18:
				return `
						background-color: #1D1815;
						color: #fff
				`;
			case 16:
				return `
							background-color: #FF0101;
							color: #000
					`;
			case 14:
				return `
						background-color: #FF6801;
						color: #000
				`;
				break;
			case 12:
				return `
						background-color: #FFCC01;
						color: #000
				`;
			case 10:
				return `
						background-color: #019EE1;
						color: #000
				`;
			default:
				return `
						background-color: #0C9646;
						color: #000
				`;
		}
	}

	formatTime(duration: number | null) {
		if (duration) {
			return `${Math.floor(duration / 60)}h ${Math.floor(duration % 60)}min`;
		}

		return '';
	}
}
