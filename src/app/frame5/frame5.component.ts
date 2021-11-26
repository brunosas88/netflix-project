import { Component, OnInit } from '@angular/core';
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
