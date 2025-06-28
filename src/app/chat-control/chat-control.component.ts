import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-control',
  templateUrl: './chat-control.component.html',
  styleUrls: ['./chat-control.component.scss']
})
export class ChatControlComponent {
 @Output() messageEmitter = new EventEmitter<string>();

  message: string = '';

  sendMessage() {
  if (this.message.trim()) {
    this.messageEmitter.emit(this.message);
  }
}

  public clear() {
    this.message = '';
  }
}
