import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-list-text-left',
  templateUrl: './promo-list-text-left.component.html',
  styleUrls: ['./promo-list-text-left.component.css']
})
export class PromoListTextLeftComponent implements OnInit {

  @Input() text = ''
  @Input() title = ''
  @Input() imgSrc = ''
  @Input() imgAlt = ''

  constructor() { }

  ngOnInit(): void {
  }

}
