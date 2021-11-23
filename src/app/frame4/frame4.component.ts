import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataRequested, Frame4Service } from './frame4.service';


interface SendData {
	email:string;
	senha:number
}

@Component({
  selector: 'app-frame4',
  templateUrl: './frame4.component.html',
  styleUrls: ['./frame4.component.css']
})



export class Frame4Component implements OnInit {
	data: SendData = {
		email:'dasdasd@gmail.com',
		senha:54658547864
	}

	dataUser: DataRequested = {
    token: "",
    users: []
}

  constructor(private http: HttpClient, private frame4Service: Frame4Service) { }

  ngOnInit(){
		// return this.http.post("https://polls.apiblueprint.org/login",this.data).subscribe({
		// 	next: value=> console.log(value),
		// 	error: error=>console.log("error")
		// })
		this.dataUser = this.frame4Service.postRequest()
		console.log(this.dataUser)
  }

}
