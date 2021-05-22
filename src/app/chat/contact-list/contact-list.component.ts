import { Component, OnInit } from '@angular/core';

import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'auto-market-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  selectedThreadIndex = -1;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  userSelected(user: string, index: number) {
    this.selectedThreadIndex = index;
    this.userService.next(user);
  }

}
