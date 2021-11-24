import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataRequested, Frame4Service } from './frame4.service';

@Component({
  selector: 'app-frame4',
  templateUrl: './frame4.component.html',
  styleUrls: ['./frame4.component.css']
})

export class Frame4Component implements OnInit {

	dataUser: DataRequested = {
    token: "",
    users: []
	}

	selectedUserId: number = 0

  constructor(private frame4Service: Frame4Service) { }

  ngOnInit(){

		this.dataUser = localStorage.getItem('data')
		console.log(this.dataUser)
  }

	getUserId(n:number) {
		this.selectedUserId = n;
		console.log(this.selectedUserId)
	}

}
