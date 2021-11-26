import { Component, OnInit } from '@angular/core';
import { LoginData } from '../core/models/login-data.model';

@Component({
	selector: 'user-page',
	templateUrl: './user-page.component.html',
	styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
	dataUser: LoginData = {
		token: '',
		users: [],
	};

	selectedUser: string = '';

	constructor() {}

	ngOnInit() {
		this.dataUser = JSON.parse(localStorage.getItem('data') || '{}');
	}

	getUserId(n: number) {
		this.selectedUser = JSON.stringify(this.dataUser.users[n - 1]);
		return localStorage.setItem('user', this.selectedUser);
	}
}
