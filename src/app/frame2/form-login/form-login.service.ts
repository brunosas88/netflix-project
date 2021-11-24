import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormLoginService {

  url: string = 'http://private-3923c4-santandercoders809.apiary-mock.com/login';
	dataUser: object = {};
	// httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // }

  constructor(private http: HttpClient) {}

	login(user: string, password: string) {
		this.dataUser = {
			email: user,
			senha: password
		}
		console.log(this.dataUser);
		return this.http.post(this.url, this.dataUser, {responseType:'text'});
	}
}
