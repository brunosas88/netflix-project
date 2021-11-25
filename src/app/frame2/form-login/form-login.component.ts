import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { FormLoginService } from './form-login.service';

@Component({
	selector: 'app-form-login',
	templateUrl: './form-login.component.html',
	styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
	formContainer = new FormGroup({
		emailPhone: new FormControl(''),
		passwordUser: new FormControl(''),
	});

	textShow: boolean = true;
	user: string = '';
	password: string = '';
	constructor(
		private fb: FormBuilder,
		private formLoginService: FormLoginService,
	) {}

	ngOnInit(): void {
		this.formContainer = this.fb.group({
			emailPhoneUser: [
				'',
				Validators.compose([
					Validators.required,
					Validators.pattern(
						/^([\d]{11}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/,
					),
				]),
			],
			passwordUser: [
				'',
				Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
			],
		});
	}

	showMessage() {
		this.textShow = false;
	}

	getInfo() {
		this.user = this.formContainer['controls']['emailPhoneUser']['value'];
		this.password = this.formContainer['controls']['passwordUser']['value'];
		this.formLoginService.login({user: this.user, password:this.password}).subscribe({
			next: (data) => {
				console.log(JSON.parse(data));
				localStorage.setItem('data', data);
			},
			error: (erro) => {
				console.log(erro.error.text);
			},
		});
	}
}
