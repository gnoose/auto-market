import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'auto-market-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() src = '';
  @Input() size = 60;
  @Input() isOnline = false;

  constructor() { }

  ngOnInit(): void {
  }

}
