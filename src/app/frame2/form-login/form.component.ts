import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formContainer = new FormGroup({
		emailPhone: new FormControl(''),
		passwordUser: new FormControl(''),
	})

	textShow: boolean = true;
	user: string = '';
	password: string = '';
	constructor(private fb: FormBuilder, private formService: FormService) { }

	ngOnInit(): void {
		this.formContainer = this.fb.group({
      emailPhoneUser: ['',  Validators.compose([Validators.required,
				Validators.pattern(/^(\d{11}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      passwordUser: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
	}

	showMessage() {
		this.textShow = false;
	}

	getInfo() {
		this.user =  this.formContainer['controls']['emailPhoneUser']['value'];
		this.password = this.formContainer['controls']['passwordUser']['value'];
		this.formService.login(this.user, this.password).subscribe( data => {
			console.log(data);
		}, erro => {
			console.log(erro.error.text);
		})
	}

}
