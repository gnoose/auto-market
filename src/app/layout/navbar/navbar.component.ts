import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auto-market-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menus = [
    { route: '/chat', label: 'Home' },
    { route: '/sell-car', label: 'Sell Car' },
    { route: '/buy-car', label: 'Buy Car' },
    { route: '/market', label: 'Market' },
    { route: '/contact-us', label: 'Contact us' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
