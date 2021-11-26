import { Component, OnInit } from '@angular/core';
import UserSeriesInfo from '../shared/models/user-series-info.model';
import { SeriesPageServices } from './series-page.service';

@Component({
	selector: 'app-frame5',
	templateUrl: './series-page.component.html',
	styleUrls: ['./series-page.component.css'],
})
export class SeriesPageComponent implements OnInit {
	constructor(private service: SeriesPageServices) {}

	userSeriesInfo: UserSeriesInfo = {} as UserSeriesInfo;
	user: number = 0;
	userName: string = '';

	ngOnInit(): void {
		this.user = 1;
		this.userName = 'Usuário 1';
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
