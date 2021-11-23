import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface DataRequested {
	token:string;
	users:Array<{
		id: number,
		name: string,
		avatarUrl: string
	}>
}

@Injectable({
  providedIn: 'root'
})
export class Frame4Service {

	data: DataRequested = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik90YXZpbyIsImlhdCI6MTUxNjIzOTAyMn0.6l2MmJjfm-kWagr2ezLoHjdBagw2JubvFYFwEVzmX5I",
    users: [
        {
            id: 1,
            name: "Usuário 1",
            avatarUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        },
        {
            id: 2,
            name: "Usuário 2",
            avatarUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        }
    ]
}


  constructor(private http: HttpClient) { }

	postRequest() {
		return (this.data)
	}

}
