import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import Series from '../shared/models/series.model';
import UserSeriesInfo from '../shared/models/user-series-info.model';
import { CarouselServices } from './frame5.service';

@Component({
	selector: 'app-frame5',
	templateUrl: './frame5.component.html',
	styleUrls: ['./frame5.component.css'],
})
export class Frame5Component implements OnInit {
	constructor(private service: CarouselServices) {}

	userSeriesInfo: UserSeriesInfo = {} as UserSeriesInfo;
	keepWatchingSeriesArray: Array<Series> = [];
	popularSeriesArray: Array<Series> = [];

	ngOnInit(): void {
		this.service.getUserSeriesInfo().subscribe({
			next: (data) => {
				forkJoin(
					data.keepWatching.map((serieId) => {
						return this.service.getSerieById(serieId);
					}),
				).subscribe((result) => (this.keepWatchingSeriesArray = result));

				forkJoin(
					data.popular.map((serieId) => {
						return this.service.getSerieById(serieId);
					}),
				).subscribe((result) => (this.popularSeriesArray = result));
			},
			error: (erro) => {
				console.log(erro.error.text);
			},
		});
	}
}
