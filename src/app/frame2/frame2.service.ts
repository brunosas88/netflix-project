import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Frame2Service {

  constructor(private http: HttpClient) { }

	postRequest() {
		//return this.http.post("https://polls.apiblueprint.org/login",   );
	}
}
