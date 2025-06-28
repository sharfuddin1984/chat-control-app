import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Message } from '../models/message.model'; // Adjust the import path as necessary


@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

private _messages$: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);

  public getMessages() {
    return this._messages$.asObservable();
  }

  public postMessage(message: string, author: 'YOU' | 'FRIEND' = 'YOU'): Observable<'SUCCESS'> {
    // write your logic here to update the messages
    const currentMessages = this._messages$.getValue();

  const newMessage: Message = {
    message: message, author,
    timestamp: Date.now()
  };

    this._messages$.next([...currentMessages, newMessage]);

    return of('SUCCESS');
  }
}
