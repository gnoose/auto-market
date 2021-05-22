import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: string = '';
  user$: BehaviorSubject<string> = new BehaviorSubject<string>(this.user);

  constructor() { }

  next(value: string): void {
    this.user = value;
    this.user$.next(this.user);
  }
}
