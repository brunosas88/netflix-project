import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Series from '../shared/models/series.model';
import UserSeriesInfo from '../shared/models/user-series-info.model';

@Injectable({
	providedIn: 'root',
})
export class CarouselServices {
	urlGetUserSeriesInfo: string =
		'http://private-3923c4-santandercoders809.apiary-mock.com/users/1';

	constructor(private http: HttpClient) {}

	generateSeriesIdUrl(id: number) {
		return `http://private-3923c4-santandercoders809.apiary-mock.com/series/${id}`;
	}

	getSerieById(id: number) {
		return this.http.get<Series>(this.generateSeriesIdUrl(id), {
			responseType: 'json',
		});
	}

	getUserSeriesInfo() {
		return this.http.get<UserSeriesInfo>(this.urlGetUserSeriesInfo, {
			responseType: 'json',
		});
	}
}
