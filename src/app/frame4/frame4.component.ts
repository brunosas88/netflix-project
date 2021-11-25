import { Component, OnInit } from '@angular/core';
import { LoginData } from '../core/models/login-data.model';

@Component({
	selector: 'app-frame4',
	templateUrl: './frame4.component.html',
	styleUrls: ['./frame4.component.css'],
})
export class Frame4Component implements OnInit {
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
