import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame1',
  templateUrl: './frame1.component.html',
  styleUrls: ['./frame1.component.css']
})
export class Frame1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

	goToLogin() {
		this.router.navigateByUrl('/login');
	}

}
