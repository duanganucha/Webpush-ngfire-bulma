import { Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseObjectObservable,
  FirebaseListObservable
} from 'angularfire2/database-deprecated';

export class Message {
  content: string;
  style: string;
  dismissed: boolean = false;

  constructor(content, style?) {
    this.content = content
    this.style = style || 'info'
  }
}

@Injectable()
export class ToastService {


  constructor(private db: AngularFireDatabase) { }

  getMessages(): FirebaseListObservable<Message[]> {
    return this.db.list('/messages', );


  }

  sendMessage(content, style) {
    
    const message = new Message("i love you", "info")
    this.db.list('/messages').push(message)
  }

  dismissMessage(messageKey) {
    this.db.object(`messages/${messageKey}`).update({'dismissed': true})
  }


}
