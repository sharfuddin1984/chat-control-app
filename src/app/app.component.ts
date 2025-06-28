import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProviderService } from './services/data-provider.service';
import { Message } from './models/message.model';
import { ChatControlComponent } from './chat-control/chat-control.component';

/**
 * 1. Typing some message on input field and clicking on Send should add a message above input
 * 2. Once the message is posted, it should be cleared from the input field
 * 3. Messages should be in descending order, the first posted message on top, the current message in the last
 * 4. Update the color of button to #28a745
 * 5. Make time to relative
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-control-app';

   public readonly messages$: Observable<Message[]> | undefined;

  @ViewChild(ChatControlComponent) chatControl: ChatControlComponent | undefined;

 constructor(private data: DataProviderService) {
  this.messages$ = this.data.getMessages(); // 💡 Now it's wired
}

  public postMessage(message: string) {
    // TODO: write code to post the message
    if(!message?.trim()) return;  
    this.data.postMessage(message, 'YOU').subscribe((status) => {
      if (status === 'SUCCESS') {
        this.chatControl?.clear();
      }
    });
  }
}
