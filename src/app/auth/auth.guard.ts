import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginData } from '../core/models/login-data.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	dataUser: LoginData = {
		token: '',
		users: [],
	};

	constructor(private router: Router, private authService: AuthService) {}

	checkIfUserIsLoggedIn(){
		this.dataUser = JSON.parse(localStorage.getItem('data') || '{}');
		const token = this.dataUser['token'];
		return token;
	}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
			this.authService.intendedUrl = state.url;
    	const shouldProceed = Boolean(this.checkIfUserIsLoggedIn());
			if (shouldProceed) return shouldProceed;
			return this.router.parseUrl('/login');
  }

}
