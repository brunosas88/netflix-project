import User from "./user.model";

export interface LoginData {
	token:string;
	users:Array<User>
}
