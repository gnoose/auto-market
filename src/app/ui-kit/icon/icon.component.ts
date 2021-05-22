import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'auto-market-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() icon = '';
  @Input() width = 24;
  @Input() color = 'dove-gray';

  constructor() { }

  ngOnInit(): void {
  }

}
