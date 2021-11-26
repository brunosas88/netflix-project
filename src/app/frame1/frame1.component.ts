import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-frame1',
	templateUrl: './frame1.component.html',
	styleUrls: ['./frame1.component.css'],
})
export class Frame1Component implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	goToLogin() {
		this.router.navigate(['/login']);
	}
}
