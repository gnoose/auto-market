import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { UserService } from '../../core/services/user.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'auto-market-message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.scss']
})
export class MessageSectionComponent implements OnInit, OnDestroy  {

  private unsubscribeAll: Subject<any> = new Subject<any>();

  messageData = [
    {text: 'Hey, Semi', sender: 'you', time: '09:30 PM'},
    {text: 'How are you today?', sender: 'you', time: '09:30 PM'},
    {text: 'Hey, Robin', sender: 'I', time: '09:30 PM'},
    {text: 'Fine, Thanks for asking', sender: 'I', time: '09:30 PM'},
    {text: 'What\'s about you?', sender: 'I', time: '09:30 PM'},
  ];
  user: string = '';
  $user: BehaviorSubject<string> = this.userService.user$;



  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.$user.asObservable().pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe((next) => {
      this.user = next;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
