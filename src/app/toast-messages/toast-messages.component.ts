import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.css']
})
export class ToastMessagesComponent implements OnInit {
  
  messages: any;

  constructor(private toast: ToastService) { }

  ngOnInit() {
    this.messages = this.toast.getMessages()
    console.log(this.messages)
  }

  // dismiss(itemKey) {
  //   this.toast.dismissMessage(itemKey)
  // }

  // infoMessage() {
  //   const message = "I have some useful information for you..."
  //   this.toast.sendMessage(message, 'info')
  // }

}
