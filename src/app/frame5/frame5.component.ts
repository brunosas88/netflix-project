import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame5',
  templateUrl: './frame5.component.html',
  styleUrls: ['./frame5.component.css'],
})
export class Frame5Component implements OnInit {
  user: number = 0;
  userName: string = '';

  constructor() {}

  ngOnInit(): void {
    this.user = 1;
    this.userName = 'Usuário 1';
  }
}
