import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

	url: string = 'http://private-3923c4-santandercoders809.apiary-mock.com/login';
	dataUser: object = {};
	httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {}

	login(user: string, password: string) {
		this.dataUser = {
			email: user,
			senha: password
		}
		return this.http.post(this.url, JSON.stringify(this.dataUser), this.httpOptions);
	}
}
