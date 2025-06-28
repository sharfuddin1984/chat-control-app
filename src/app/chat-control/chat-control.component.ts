import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-control',
  templateUrl: './chat-control.component.html',
  styleUrls: ['./chat-control.component.scss']
})
export class ChatControlComponent {
 @Output() messageEmitter = new EventEmitter<string>();

  message: string = '';
  isActive: boolean = false;

  onTyping() {
    this.isActive = this.message.trim().length > 0;
  }

  sendMessage() {
  if (this.message.trim()) {
    this.messageEmitter.emit(this.message);
  }
}

  public clear() {
    this.message = '';
    this.isActive = false;
  }
}
