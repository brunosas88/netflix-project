import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import Series from '../shared/models/series.model';
import UserSeriesInfo from '../shared/models/user-series-info.model';
import { SeriesPageServices } from './frame5.service';

@Component({
	selector: 'app-frame5',
	templateUrl: './frame5.component.html',
	styleUrls: ['./frame5.component.css'],
})
export class Frame5Component implements OnInit {
	constructor(private service: SeriesPageServices) {}

	userSeriesInfo: UserSeriesInfo = {} as UserSeriesInfo;

	ngOnInit(): void {
		this.service.getUserSeriesInfo().subscribe({
			next: (data) => {
				this.userSeriesInfo = data;
			},
			error: (erro) => {
				console.log(erro.error.text);
			},
		});
	}
}
