import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-modal-server',
	templateUrl: './modal-server.component.html',
	styleUrls: ['./modal-server.component.css'],
})
export class ModalServerComponent implements OnInit {
	modalRef?: BsModalRef;
	constructor(private modalService: BsModalService) {}

	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}

	ngOnInit() {}
}
