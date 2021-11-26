import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-frame1',
  templateUrl: './frame1.component.html',
  styleUrls: ['./frame1.component.css']
})
export class Frame1Component implements OnInit {

	@Output() eventEmiter = new EventEmitter<boolean>();
	name: any;
  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
		this.activatedRouter.queryParams.subscribe( params => {
			console.log(params)
		})
  }

	goToLogin() {
		this.router.navigate(['/login'], );
		this.eventEmiter.emit(false);
	}

}
