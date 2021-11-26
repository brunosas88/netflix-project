import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import UserSeriesInfo from '../shared/models/user-series-info.model';
import { SeriesPageServices } from './series-page.service';

interface User {
	id: number;
	name: string;
	avatarUrl: string;
}

@Component({
	selector: 'app-frame5',
	templateUrl: './series-page.component.html',
	styleUrls: ['./series-page.component.css'],
})
export class SeriesPageComponent implements OnInit {
	constructor(private service: SeriesPageServices) {}

	userSeriesInfo: UserSeriesInfo = {} as UserSeriesInfo;

	selectedUser: User = {
		id: 0,
		name: '',
		avatarUrl: '',
	};

	ngOnInit(): void {
		this.selectedUser = JSON.parse(
			localStorage.getItem('selectedUser') || '{}',
		);

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
