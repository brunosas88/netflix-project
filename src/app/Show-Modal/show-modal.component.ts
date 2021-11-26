import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'show-modal',
	templateUrl: './show-modal.component.html',
	styleUrls: ['./show-modal.component.css'],
})
export class ShowModalComponent implements OnInit {
	title?: string;
	closeBtnName?: string;
	list: string[] = [];

	constructor(public bsModalRef: BsModalRef) {}

	ngOnInit() {
		this.list.push('PROFIT!!!');
	}
}
