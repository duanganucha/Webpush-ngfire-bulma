import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';
import { Observable } from 'rxjs/Observable';
import {  AngularFireDatabase } from 'angularfire2/database';

// import {
//   AngularFireDatabase,
//   FirebaseObjectObservable,
//   FirebaseListObservable
// } from 'angularfire2/database-deprecated';


@Component({
  selector: 'toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.css']
})
export class ToastMessagesComponent implements OnInit {
  
  messages : Observable<any>;


  constructor(private toast: ToastService ,private database: AngularFireDatabase) { }

  ngOnInit() {
    this.messages = this.database.list('messages', ref => ref.orderByChild('timestamp')).snapshotChanges()

  }

  dismiss(itemKey) {

    console.log(itemKey)
    let itemRef = this.database.list('messages');
    itemRef.remove(itemKey);
  }

  infoMessage() {
    console.log('infoMessage')
    const message = "I have some useful information for you..."
    this.toast.sendMessage(message, 'info')
  }

}
