import { ToastService } from './toast.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ToastMessagesComponent } from './toast-messages/toast-messages.component';
import { ReversePipe } from './reverse.pipe';

import {
  AngularFireDatabase
} from 'angularfire2/database-deprecated';

@NgModule({
  declarations: [
    AppComponent, ToastMessagesComponent,ReversePipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [ToastService,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
