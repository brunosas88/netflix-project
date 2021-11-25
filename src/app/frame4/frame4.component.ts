
import { Component, OnInit } from '@angular/core';
import { LoginData } from '../core/models/login-data.model';
import { Frame4Service } from './frame4.service';

@Component({
  selector: 'app-frame4',
  templateUrl: './frame4.component.html',
  styleUrls: ['./frame4.component.css']
})

export class Frame4Component implements OnInit {

	dataUser: LoginData = {
    token: "",
    users: []
	}

	test: string = ''

	selectedUserId: number = 0

  constructor(private frame4Service: Frame4Service) { }

  ngOnInit(){
		// this.test = JSON.parse(localStorage.getItem('data'))
		// this.dataUser = JSON.parse(this.test)
		// console.log(this.dataUser)
  }

	getUserId(n:number) {
		this.selectedUserId = n;
		console.log(this.selectedUserId)
	}

}
