import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormLoginService {

  url: string = 'http://private-3923c4-santandercoders809.apiary-mock.com/login';

  constructor(private http: HttpClient) {}

	login(dataUser: {user: string, password: string}) {
		return this.http.post(this.url, dataUser, {responseType:'text'});
	}


}
