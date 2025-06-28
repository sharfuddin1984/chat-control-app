import { Component, Input } from '@angular/core';
import { Message } from '../models/message.model'; // Adjust the import path as necessary

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  @Input() messages: Message[] | undefined;

  get orderedMessages(): Message[] {
    return [...(this.messages ?? [])].reverse();
  }
}
