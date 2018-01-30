import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, NavController} from 'ionic-angular';
import { MyApp } from './app.component';

import { ConnectPage } from '../pages/connect/connect';
import { GamePage} from "../pages/game/game";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoomPage } from "../pages/room/room";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyA6HMFsowdkWKqCGl9366P6t0nUwHCTMYo",
  authDomain: "werewolf-79add.firebaseapp.com",
  databaseURL: "https://werewolf-79add.firebaseio.com",
  projectId: "werewolf-79add",
  storageBucket: "werewolf-79add.appspot.com",
  messagingSenderId: "496617749912"
};

@NgModule({
  declarations: [
    MyApp,
    ConnectPage,
    RoomPage,
    GamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConnectPage,
    RoomPage,
    GamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
