import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiKitModule } from '../ui-kit/ui-kit.module';

import { ChatRoutingModule } from './chat-routing.module';

import { ChatComponent } from './chat.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MessageSectionComponent } from './message-section/message-section.component';

@NgModule({
  declarations: [
    ChatComponent,
    ContactListComponent,
    MessageSectionComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    UiKitModule
  ]
})
export class ChatModule {
}
