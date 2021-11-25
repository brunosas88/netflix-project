import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-list-text-right',
  templateUrl: './promo-list-text-right.component.html',
  styleUrls: ['./promo-list-text-right.component.css']
})
export class PromoListTextRightComponent implements OnInit {
  
  @Input() text = ''
  @Input() title = ''
  @Input() imgSrc = ''
  @Input() imgAlt = ''

  constructor() { }

  ngOnInit(): void {
  }

}
