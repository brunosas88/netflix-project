import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-series-info',
	templateUrl: './series-info.component.html',
	styleUrls: ['./series-info.component.css'],
})
export class SeriesInfoComponent implements OnInit {
	@Input() title: string = '';
	@Input() info: Array<string> = [];

	reducedInfo: string = '';

	constructor() {}

	infoReducer(info: Array<string>) {
		return info.reduce((accumulator, data, index) => {
			if (index < info.length - 1) {
				accumulator += `${data}, `;
			} else {
				accumulator += data;
			}

			return accumulator;
		}, '');
	}

	ngOnInit(): void {
		this.reducedInfo = this.infoReducer(this.info);
	}
}
