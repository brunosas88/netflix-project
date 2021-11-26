import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Series from '../shared/models/series.model';

@Injectable({
	providedIn: 'root',
})
export class CarouselServices {
	constructor(private http: HttpClient) {}

	generateSeriesIdUrl(id: number) {
		return `http://private-3923c4-santandercoders809.apiary-mock.com/series/${id}`;
	}

	getSerieById(id: number) {
		return this.http.get<Series>(this.generateSeriesIdUrl(id), {
			responseType: 'json',
		});
	}
}
