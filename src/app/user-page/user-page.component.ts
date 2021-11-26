import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../shared/models/login-data.model';

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

	constructor(private router: Router) {}

	ngOnInit() {
		this.dataUser = JSON.parse(localStorage.getItem('data') || '{}');
	}

	getUserId(n: number) {
		this.selectedUser = JSON.stringify(this.dataUser.users[n - 1]);
		localStorage.setItem('selectedUser', this.selectedUser);
		this.router.navigate(['series']);
	}
}
